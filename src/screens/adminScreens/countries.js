import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SMButton from '../../components/SMButton'
import SMInput from '../../components/SMInput'
import SMGrid from '../../components/SMGrid'
import { getData, sendData } from '../../config/firebasemethod'
import loaderImage from "../../assets/loader.gif";



function Countries() {
    const [model, setModel] = useState({})
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let saveCountry = () => {
        console.log(model)
        sendData(model, 'countries').then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    let getCountryData = () => {
        setIsLoading(true)
        getData('countries').then((res) => {
            setIsLoading(false)
            console.log(res)
            setList(res)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        getCountryData()
    }, [])

    return (
        <>
            {isLoading ? <img src={loaderImage} width='100vw' alt='loader' />
                :
                (
                    <>
                        <Typography mt={7} variant='h3' sx={{  fontWeight:'bold' }}>Countries</Typography>
                        <Box mt={5}>
                            <Grid container>
                                <Grid item md={4} sx={{ padding: 2 }}>
                                    <SMInput label='Country Name' onChange={(e) => setModel({ ...model, countryName: e.target.value })} />
                                </Grid>
                            <Grid item md={4} sx={{ padding: 2 }}>
                                    <SMInput label='Country Code' onChange={(e) => setModel({ ...model, countryCode: e.target.value })} />
                                </Grid>
                                <Grid item md={4} sx={{ padding: 2 }}>
                                    <SMInput label='Currency' onChange={(e) => setModel({ ...model, currency: e.target.value })} />
                                </Grid>
                                <Grid item md={12} sx={{ padding: 2 }}>
                                    <SMButton size='large' label='Save' onClick={saveCountry} />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <SMGrid style={{marginTop:'100px'}} datasource={list} onRowClick={(e) => console.log(e)} Cols={[
                                {
                                    displayName: 'Country Name',
                                    key: 'countryName'
                                },
                                {
                                    displayName: 'Country Code',
                                    key: 'countryCode'
                                },
                                {
                                    displayName: 'Local Currency',
                                    key: 'currency'
                                }
                            ]} />
                        </Box>
                    </>
                )
            }
        </>
    )
}

export default Countries