import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { getData } from '../config/firebasemethod';

export default function SMRadio(props) {
    const { label, value, onChange, disabled, datasource, color, size, required, fullWidth, displayField, valueField, nodeName, variant, groupLabel } = props

    const [dtSource, setDtSource] = useState(datasource)

    let getNodeData = () => {
        if (nodeName) {
            getData(nodeName).then((res) => {
                console.log(res)
                setDtSource(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getNodeData()
    }, [])

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{groupLabel}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                // defaultValue="female"
                name="row-radio-buttons-group"
            >
                {dtSource && dtSource.length > 0 ? dtSource.map((e, i) => (
                    <FormControlLabel value={e[valueField ? valueField : 'id']} control={<Radio color={color} size={size} />} label={e[displayField ? displayField : 'fullName']} key={i} disabled={disabled} />))
                    : null}
            </RadioGroup>
        </FormControl>
    );
}
