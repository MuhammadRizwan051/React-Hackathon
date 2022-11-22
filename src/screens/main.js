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
import bikeImage from '../assets/bike.png'
import taxiImage from '../assets/taxi.png'
import coasterImage from '../assets/coaster.png'
import hiaceImage from '../assets/hiace.png'
import carImage from '../assets/car.png'
import SMNavbar from '../components/SMNavbar'
import { Box } from '@mui/system';
import SMButton from '../components/SMButton';
// import Container from '@mui/material/Container'


function Main() {
    const navigate = useNavigate()

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
    useEffect(() => { getTransportData() }, [])


    let addTransport = () => {
        navigate('/login')
        // console.log('Click')
        // navigate('/userForm')
    }

    return (
        <>
            <SMNavbar />
            {/* <Typography height='10%' variant='h3' sx={{ fontWeight: 'bold', backgroundColor: 'black', color: 'white', fontFamily: 'cursive' }}>Available Transport</Typography> */}
            {isLoader ? <SMFullScreenLoader />
                : (
                    <>
                        <img src={trafficImage} style={{ width: '90vh' }} />


                        <Box sx={{ backgroundColor: '#F2F5F8' }} px={15} py={20}>
                            <Typography height='10%' variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }} mb={10}>One app for everyday needs</Typography>
                            <Grid container columnSpacing={2} mt={5}>
                                <Grid item md={2} sm={6}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px', height: '250px', width: '100%' }}>
                                        <Card.Img variant="top" src={rickshawImage} style={{ width: '100%', height: '80%' }} />
                                        {/* <Card.Body style={{ height: '53%' }}>
                                        </Card.Body> */}
                                        <Card.Footer style={{ height: '20%' }}>
                                            <Card.Title>Rickshaw</Card.Title>
                                            {/* <small className="text-muted">Rickshaw</small> */}
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                                <Grid item md={2} sm={6}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px', height: '250px', width: '100%' }}>
                                        <Card.Img variant="top" src={carImage} style={{ width: '100%', height: '80%' }} />
                                        {/* <Card.Body style={{ height: '53%' }}>
                                        </Card.Body> */}
                                        <Card.Footer style={{ height: '20%' }}>
                                            <Card.Title>Car</Card.Title>
                                            {/* <small className="text-muted">Rickshaw</small> */}
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                                <Grid item md={2} sm={6}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px', height: '250px', width: '100%' }}>
                                        <Card.Img variant="top" src={bikeImage} style={{ width: '100%', height: '80%' }} />
                                        {/* <Card.Body style={{ height: '53%' }}>
                                        </Card.Body> */}
                                        <Card.Footer style={{ height: '20%' }}>
                                            <Card.Title>Bike</Card.Title>
                                            {/* <small className="text-muted">Rickshaw</small> */}
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                                <Grid item md={2} sm={6}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px', height: '250px', width: '100%' }}>
                                        <Card.Img variant="top" src={coasterImage} style={{ width: '100%', height: '80%' }} />
                                        {/* <Card.Body style={{ height: '53%' }}>
                                        </Card.Body> */}
                                        <Card.Footer style={{ height: '20%' }}>
                                            <Card.Title>Coaster</Card.Title>
                                            {/* <small className="text-muted">Rickshaw</small> */}
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                                <Grid item md={2} sm={6}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px', height: '250px', width: '100%' }}>
                                        <Card.Img variant="top" src={taxiImage} style={{ width: '100%', height: '80%' }} />
                                        {/* <Card.Body style={{ height: '53%' }}>
                                        </Card.Body> */}
                                        <Card.Footer style={{ height: '20%' }}>
                                            <Card.Title>Taxi</Card.Title>
                                            {/* <small className="text-muted">Rickshaw</small> */}
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                                <Grid item md={2} sm={6}>
                                    <Card style={{ boxShadow: '1px 1px 5px 0px lightGrey', borderRadius: '30px', height: '250px', width: '100%' }}>
                                        <Card.Img variant="top" src={hiaceImage} style={{ width: '100%', height: '80%' }} />
                                        {/* <Card.Body style={{ height: '53%' }}>
                                        </Card.Body> */}
                                        <Card.Footer style={{ height: '20%' }}>
                                            <Card.Title>Hiace</Card.Title>
                                            {/* <small className="text-muted">Rickshaw</small> */}
                                        </Card.Footer>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Box>

                        {/* <Box>
                            <Grid container paddingX={25} columnSpacing={2} rowSpacing={3}  >
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
                        </Box> */}

                        <Grid container columnSpacing={2} mt={5}>
                            <Grid item md={6}>
                                <SMButton label='Add Transport' size='large' onClick={addTransport} sx={{ width: 1, fontSize: '20px', backgroundImage: `linear-gradient(to top, #003418, #009D4E)` }} />
                            </Grid>
                            <Grid item md={6}>
                                <SMButton label='Book A Transport' size='large' sx={{ width: 1, fontSize: '20px', backgroundImage: `linear-gradient(to top, #003418, #009D4E)` }} />
                            </Grid>
                        </Grid>

                        <Box sx={{ backgroundColor: '#242948', height: '600px' }} mt={10}>
                            <Typography height='10%' variant='h3' sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'cursive' }}>Footer</Typography>
                        </Box>
                    </>
                )
            }

        </>
    )
}

export default Main