import React, { useEffect, useState } from 'react'
import { getData } from '../config/firebasemethod'
import { Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import vehicle from "../assets/vehicle.jpg"
import { Grid, Typography, } from '@mui/material';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import { useNavigate } from 'react-router-dom';
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
            <Typography paddingY='15px' variant='h3' sx={{ fontWeight: 'bold', backgroundColor: 'black', color: 'white', fontFamily: 'cursive' }}>Transport for Booking</Typography>
            {isLoader ? <SMFullScreenLoader />
                :
                <Container>
                    <Grid container mt={5} columnSpacing={4}>
                        {data && data.map((e, i) => (
                            <Grid item>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={vehicle} />
                                    <Card.Body>
                                        <Card.Title>{` ${e.vehicle}`}</Card.Title>
                                        <Card.Text>{`No. Of Seats ${e.noOfSeats}`}</Card.Text>
                                        <Card.Text>{`Price: ${e.pricePerSeat}`}</Card.Text>
                                        <Card.Text>{`Route: ${e.routes}`}</Card.Text>
                                        <Card.Text>{`Transport Category: ${e.transportCategory}`}</Card.Text>
                                        <Button variant="primary" onClick={() => bookNow(e)}>Book Now</Button>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }

        </>
    )
}

export default Cards