import type { NextPage } from 'next'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Wrapper = styled.div`
    margin: 1em;
`

const Rpg: NextPage = () => {
    const [name, setName] = useState('')
    const [stat, setStat] = useState(0)
    const [gender, setGender] = useState('Feminino');
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
    };
    return (
        <Wrapper>
            <TextField 
                id="standard-basic" 
                label="Nome" 
                variant="standard" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Box sx={{ height: 300 }}>
                <Slider
                    aria-label="Temperature"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={15}
                    value={stat} 
                    orientation="vertical"
                    onChange={(e: any) => setStat(e.target.value)}
                />
            </Box>
            {stat}
            <div>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Genero</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={gender}
                        onChange={handleGenderChange}
                    >
                        <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                        <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                    </RadioGroup>
                </FormControl>
            </div>
            {gender}
        </Wrapper>
    )
}

export default Rpg