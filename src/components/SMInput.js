import React from 'react'
import { TextField } from '@mui/material'

function SMInput(props) {
    const { label, onChange, value, type, disabled, required, placeholder, size, variant } = props
    return (
        <>
            <TextField fullWidth id="standard-basic" label={label} onChange={onChange} value={value}
                type={type} disabled={disabled} required={required} placeholder={placeholder} size={size} variant={variant} />
        </>
    )
}

export default SMInput