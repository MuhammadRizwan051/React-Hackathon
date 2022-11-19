import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SMButton from '../../components/SMButton'
import SMInput from '../../components/SMInput'
import SMSelect from '../../components/SMSelect'
import SMGrid from '../../components/SMGrid'
import { getData, sendData } from '../../config/firebasemethod'
import CircularProgress from '@mui/material/CircularProgress'
import loaderImage from "../../assets/loader.gif";
import { useNavigate } from 'react-router-dom'
import SMDatePicker from '../../components/SMDatePicker'
import { setDate } from 'date-fns'



function Cities() {
    const [model, setModel] = useState({})
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [gridLoad, setGridLoad] = useState(true)
    // const [screenLoading, setScreenLoading] = useState(true)
    const navigate = useNavigate()


    let saveCity = () => {
        setIsLoading(true)
        console.log(model)
        sendData(model, 'cities')
            .then((res) => {
                setIsLoading(false)
                console.log(res)
                navigate('/countries')
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err)
            })
    }

    let getCityData = () => {
        setGridLoad(true)
        getData('cities').then((res) => {
            setGridLoad(false)
            console.log(res)
            setList(res)
        }).catch((err) => {
            setGridLoad(false)
            console.log(err)
        })
    }

    useEffect(() => {
        getCityData()
    }, [])


    return (
        <>
            {/* {gridLoad ? <img src={loaderImage} width='100vw' alt='loader' />
                : */}
            <>
                <Typography mt={7} variant='h3' sx={{ fontWeight: 'bold' }}>Cities</Typography>
                <Box mt={5}>
                    <Grid container>
                        <Grid item md={4} sx={{ padding: 2 }}>
                            <SMSelect datasource={[]} onChange={(e) => setModel({ ...model, countryCode: e.target.value })} displayField='countryName' valueField='countryCode' label='Country' nodeName='countries' />
                        </Grid>
                        <Grid item md={4} sx={{ padding: 2 }}>
                            <SMInput label='City Name' onChange={(e) => setModel({ ...model, cityName: e.target.value })} />
                        </Grid>
                        <Grid item md={4} sx={{ padding: 2 }}>
                            <SMInput label='City Code' onChange={(e) => setModel({ ...model, cityCode: e.target.value })} />
                        </Grid>
                        <Grid item md={12} sx={{ padding: 2 }}>
                            {/* <SMButton size='large' label="Save" onClick={saveCity} /> */}
                            <SMButton label='Save' size="large" loading={isLoading} onClick={saveCity} fullWidth='true' />
                            {/* <Button size='large' onClick={saveCity}>{isLoading ? <CircularProgress /> : 'Save'}</Button> */}
                        </Grid>
                        
                    </Grid>
                </Box>
                <Box>
                    <SMGrid style={{ marginTop: '100px' }} gridLoading={gridLoad} datasource={list} Cols={[
                        {
                            displayName: 'CityCode',
                            key: 'cityCode'
                        },
                        {
                            displayName: 'CityName',
                            key: 'cityName'
                        },
                        {
                            displayName: 'CountryCode',
                            key: 'countryCode'
                        },
                        {
                            displayName: 'Id',
                            key: 'id'
                        }
                    ]} />
                </Box>
            </>
            {/* } */}
        </>
    )
}

export default Cities