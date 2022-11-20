import { Box, Typography, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData } from '../config/firebasemethod'
import SMLoader from '../components/SMLoader';
import { Button, Card } from 'react-bootstrap';
import vehicle from "../assets/vehicle.jpg"



function Booking() {
    const [list, setList] = useState()
    let [isLoader, setIsLoader] = useState(true)


    let getBookingData = () => {
        setIsLoader(true)
        getData('bookingUser').then((res) => {
            setIsLoader(false)
            console.log(res.vehicleDetails)
            setList(res)
        }).catch((err) => {
            setIsLoader(false)
            console.log(err)
        })
    }
    console.log(list, 'list list list')
    useEffect(() => { getBookingData() }, [])
    return (
        <>
            <Box mt={6}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>Your Bookings</Typography>
                {isLoader ? <SMLoader />
                    :
                    <Container>
                        <Grid container mt={5} columnSpacing={2} rowSpacing={4}>
                            {list && list.map((e, i) => (
                                <Grid item md={3}>
                                    <Card >
                                        <Card.Img variant="top" src={vehicle} />
                                        <Card.Body>
                                            <Card.Title sx={{fontWeight:'bold'}}>{` ${e.vehicleDetails.vehicle}`}</Card.Title>
                                            <Card.Text>{`No. Of Seats ${e.vehicleDetails.noOfSeats}`}</Card.Text>
                                            <Card.Text>{`Price: ${e.vehicleDetails.pricePerSeat}`}</Card.Text>
                                            <Card.Text>{`Route: ${e.vehicleDetails.routes}`}</Card.Text>
                                            <Card.Text>{`Transport Category: ${e.vehicleDetails.transportCategory}`}</Card.Text>
                                            {/* <Button variant="primary" onClick={() => bookNow(e)}>Book Now</Button> */}
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                }

            </Box>
        </>
    )
}

export default Booking