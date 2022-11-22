import { FormControl, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SMButton from '../../components/SMButton'
import SMInput from '../../components/SMInput'
import SMLoader from '../../components/SMLoader'
import SMSelect from '../../components/SMSelect'
import SMTimePicker from '../../components/SMTimePicker'
import { sendData } from '../../config/firebasemethod'

function AddTransport() {

    let [model, setModel] = useState([])
    let [btn, setBtn] = useState(true)
    let [isLoading, setIsLoading] = useState(false)

    let submit = () => {
        setIsLoading(true)
        console.log(model)
        // if(model.key >= model.length) {


        sendData(model, `transport/`)
        setIsLoading(true)
            .then((success => {
                console.log(success);
                alert('Transport details has been submitted')
                setIsLoading(false)
            }))
            .catch((err => {
                console.log(err);
                alert('Plz! submit again')
                setIsLoading(false)
            }))
    }
    console.log(isLoading)
    useEffect(() => {
        if (Object.keys(model).length >= 5) {
            setBtn(false)
        }
    }, [model])

    // const [time, setTime] = useState()
    // console.log(time)
    // console.log(time?.$H)
    // const myJson = JSON.stringify(time?.$d)
    // const [routeTime, setRouteTime] = useState(myJson)
    // console.log(myJson)


    let transportCategory = [
        {
            fullName: 'School',
            id: 'School'
        },
        {
            fullName: 'Office',
            id: 'Office'
        },
        {
            fullName: 'Private',
            id: 'Private'
        },
    ]


    let vehicles = [
        {
            fullName: 'Hiace',
            id: 'Hiace'
        },
        {
            fullName: 'Car',
            id: 'Car'
        },
        {
            fullName: 'Suzuki',
            id: 'Suzuki'
        },
    ]

    let routes = [
        {
            fullName: 'Hasan Square - NIPA',
            id: 'Hasan Square - Nipa'
        },
        {
            fullName: 'Saddar - Bolten Market',
            id: 'Saddar - Bolten Market'
        },
        {
            fullName: 'Liaquatabad - Numaish',
            id: 'Liaquatabad - Numaish'
        },
    ]


    return (
        <>
            <Box mt={6} paddingX={70}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive', color:'white' }}> Transport</Typography>
                <Grid container mt={3} rowSpacing={3} paddingX='50px' paddingBottom='30px' sx={{backgroundColor:'white', borderRadius: '40px' }}>
                    <Grid item md={12}>
                        <SMSelect label='Transport Category' variant='standard' datasource={transportCategory} onChange={(e) => setModel({ ...model, transportCategory: e.target.value })} />
                    </Grid>
                    <Grid item md={12}>
                        <SMSelect label='Vehicles' variant='standard' datasource={vehicles} onChange={(e) => setModel({ ...model, vehicle: e.target.value })} />
                    </Grid>
                    <Grid item md={12}>
                        <SMSelect label='Routes' variant='standard' datasource={routes} onChange={(e) => setModel({ ...model, routes: e.target.value })} />
                    </Grid>


                    {/* <Grid item md={12}>
                        <SMTimePicker value={time} onChange={(e) => {
                            setTime(e)
                            setModel({ ...model, time: routeTime })
                        }
                        } />
                    </Grid> */}
                    <Grid item md={12}>
                        <SMInput label='No of Seats' type='number' variant='standard' onChange={(e) => setModel({ ...model, noOfSeats: e.target.value })} />
                    </Grid>
                    <Grid item md={12}>
                        <SMInput label='Price per Seat' type='number' variant='standard' onChange={(e) => setModel({ ...model, pricePerSeat: e.target.value })} />
                    </Grid>
                    <Grid item md={12}>
                        <SMButton onClick={submit} size='large' variant='contained' label={isLoading ? <SMLoader style={{ color: 'inherit' }} /> : 'submit'} disabled={btn} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AddTransport