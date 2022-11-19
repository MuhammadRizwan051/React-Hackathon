import { Button } from '@mui/material'
import React from 'react'

function SMButton(props) {
    const {variant, onClick, color, label, disabled, sx, size} = props
    return (
        <>
            <Button variant={variant ?? 'contained'} onClick={onClick} color={color} sx={sx} size={size}>{label}</Button>
        </>
    )
}

export default SMButton
