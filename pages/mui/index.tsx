import type { NextPage } from 'next'
import styled from 'styled-components'
import BasicLayout from 'layout/Basic'
import { Typography, Button, Snackbar, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

const Title = styled.h1`
  color: #808080;
`
const InputLabel = styled.label`
    display: none;
`

const Home: NextPage = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')

    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </>
    )

    return (
        <BasicLayout>
            <Title>Index</Title>
            <Typography>Teste</Typography>
            <TextField 
                id="text-field-for-snackbar"
                label="SnackBar"
                variant="standard"
                size="small"
                value={text}
                onChange={(e) => setText(e.target.value)}
                helperText="Snackbar text"
            />
            <Button variant="contained" onClick={handleClick}>Open</Button>
            <Snackbar 
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={text}
                action={action}
            />
        </BasicLayout>
    )
}

export default Home
