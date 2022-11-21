import React, { useEffect, useState } from 'react'
import { getData } from '../config/firebasemethod'
import { Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import vehicle from "../assets/vehicle.jpg"
import { Grid, Typography, } from '@mui/material';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import { useNavigate } from 'react-router-dom';
import trafficImage from '../assets/bykea.png'
import SMNavbar from '../components/SMNavbar'
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
                        <Grid container paddingX={25} columnSpacing={2} rowSpacing={3} mt={5} >
                            {data && data.map((e, i) => (
                                <Grid item md={3}>
                                    {/* <CardGroup> */}
                                        <Card style={{ boxShadow: '0px 0px 2px', }} onClick={() => bookNow(e)}>
                                            <Card.Img variant="top" src={vehicle} style={{ height: '47%',  }} />
                                            <Card.Body style={{ height: '53%' }}>
                                                <Card.Title>{` ${e.vehicle}`}</Card.Title>
                                                <Card.Text>{`No. Of Seats ${e.noOfSeats}`}</Card.Text>
                                                <Card.Text>{`Price: ${e.pricePerSeat}`}</Card.Text>
                                                <Card.Text>{`Route: ${e.routes}`}</Card.Text>
                                                <Card.Text>{`Transport Category: ${e.transportCategory}`}</Card.Text>
                                                <Card.Footer >
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    {/* </CardGroup> */}
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )
            }

        </>
    )
}

export default Cards