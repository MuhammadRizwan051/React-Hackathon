import React, { useEffect, useState } from 'react'
import { getData } from '../config/firebasemethod'
import { Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import vehicle from "../assets/vehicle.jpg"
import { Grid, Typography, } from '@mui/material';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import { useNavigate } from 'react-router-dom';
import trafficImage from '../assets/bykea.png'
import rickshawImage from '../assets/rickshaw.png'
import SMNavbar from '../components/SMNavbar'
import { Box } from '@mui/system';
// import Container from '@mui/material/Container'


function Cards() {
    let [data, setData] = useState()
    let [isLoader, setIsLoader] = useState(true)
    let getTransportData = () => {
        getData(`transport/`)
            .then((res) => {
                setIsLoader(false)
                setData(res)
                console.log(res)
            })
            .catch((err) => {
                setIsLoader(false)
                alert(err)
            })
    }
    console.log(data)
    useEffect(() => { getTransportData() }, [])

    const navigate = useNavigate()

    let bookNow = (e) => {
        console.log('Click')
        navigate('/userForm', { state: e })
    }

    return (
        <>
            <SMNavbar />
            {/* <Typography height='10%' variant='h3' sx={{ fontWeight: 'bold', backgroundColor: 'black', color: 'white', fontFamily: 'cursive' }}>Available Transport</Typography> */}
            {isLoader ? <SMFullScreenLoader />
                : (
                    <>
                        <img src={trafficImage} style={{ width: '90vh' }} />


                        <Box sx={{ backgroundColor: '#F2F5F8' }}>
                            <Grid container paddingX={25} columnSpacing={2} mt={5}>
                                <Grid item md={3}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px' }}>
                                        <Card.Img variant="top" src={rickshawImage} style={{ width: '100%' }} />
                                        <Card.Body style={{ height: '53%' }}>
                                            <Card.Title>Rickshaw</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid container paddingX={25} columnSpacing={2} rowSpacing={3} mt={5} >
                                {data && data.map((e, i) => (
                                    <Grid item md={3}>
                                        <Card style={{ boxShadow: '0px 0px 2px', }} onClick={() => bookNow(e)}>
                                            <Card.Img variant="top" src={vehicle} style={{ height: '47%', }} />
                                            <Card.Body style={{ height: '53%' }}>
                                                <Card.Title>{` ${e.vehicle}`}</Card.Title>
                                                <Card.Text>{`No. Of Seats ${e.noOfSeats}`}</Card.Text>
                                                <Card.Text>{`Price: ${e.pricePerSeat}`}</Card.Text>
                                                <Card.Text>{`Route: ${e.routes}`}</Card.Text>
                                                <Card.Text>{`Transport Category: ${e.transportCategory}`}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer >
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </>
                )
            }

        </>
    )
}

export default Cards