import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import SMButton from '../components/SMButton'
import SMInput from '../components/SMInput'
import SMFullScreenLoader from '../components/SMFullScreenLoader'
import { sendData } from '../config/firebasemethod'

function UserForm() {
    let [model, setModel] = useState([])
    let [btn, setBtn] = useState(true)
    let [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    let submit = () => {
        setLoader(true)
        model.vehicleDetails = location.state
        sendData(model, `bookingUser/`)
            .then((success => {
                setLoader(false)
                navigate('/userForm')
                console.log(success);
                setModel({})
                alert('Your details has been submitted')
            }))
            .catch((err => {
                setLoader(false)
                console.log(err);
                alert('Plz! submit again')
            }))
    }
    const location = useLocation()
    console.log(location.state)
    useEffect(() => {
        if (Object.keys(model).length >= 4) {
            setBtn(false)
        }
    }, [model])

    return (
        <>
            {/* {loader ? <SMFullScreenLoader />
                : */}
                <Box mt={6}>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>Transport Booking Form</Typography>
                    <Grid container mt={3} spacing={3} paddingX={70}>
                        <Grid item md={12}>
                            <SMInput label='FullName' variant='standard' value={model.fullName} onChange={(e) => setModel({ ...model, fullName: e.target.value })} />
                        </Grid>
                        <Grid item md={12}>
                            <SMInput label='Email' variant='standard' value={model.email} onChange={(e) => setModel({ ...model, email: e.target.value })} />
                        </Grid>
                        <Grid item md={12}>
                            <SMInput label='CNIC' variant='standard' value={model.cnic} onChange={(e) => setModel({ ...model, cnic: e.target.value })} />
                        </Grid>
                        <Grid item md={12}>
                            <SMInput label='Contact' variant='standard' value={model.contact} onChange={(e) => setModel({ ...model, contact: e.target.value })} />
                        </Grid>
                        <Grid item md={12}>
                            <SMButton label={loader? <SMFullScreenLoader /> : 'Submit'} size='large' variant='contained' onClick={submit} disabled={btn} />
                        </Grid>

                    </Grid>
                </Box>
             {/* } */}
        </>
    )
}

export default UserForm