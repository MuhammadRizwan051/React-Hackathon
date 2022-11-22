import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SMGrid from '../../components/SMGrid'
import { getData } from '../../config/firebasemethod'
import { Button, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function BookingDetails() {
    const [list, setList] = useState()
    let getBookingData = () => {
        // setIsLoading(true)
        getData('bookingUser').then((res) => {
            // setIsLoading(false)
            console.log(res)
            setList(res)
        }).catch((err) => {
            // setIsLoading(false)
            console.log(err)
        })
    }
    console.log(list)
    useEffect(() => { getBookingData() }, [])


    return (
        <>
            <Box mt={6}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>User Booking Details</Typography>
                <SMGrid />
                <Container>
                    <Grid container mt={5} columnSpacing={1} rowSpacing={2}>
                        {list && list.map((e, i) => (
                            <Grid item md={3}>
                                <Card style={{ width: '18rem', padding: '15px 5px' }} paddingY={10}>
                                    {/* <Card.Img variant="top" src={vehicle} /> */}
                                    <Card.Body>
                                        <Card.Title sx={{fontWeight:'bold'}}>{`Name: ${e.fullName}`}</Card.Title>
                                        <Card.Text>{`Email: ${e.email}`}</Card.Text>
                                        <Card.Text>{`CNIC: ${e.cnic}`}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default BookingDetails