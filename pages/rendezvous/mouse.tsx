import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

interface BubbleProps {
    coordX: number
    coordY: number
}

const Bubble = styled.div<BubbleProps>`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 2em;
    background-color: red;
    top: ${props => props.coordY-25}px;
    left: ${props => props.coordX-25}px;
    transition: linear .2s;
`


const Mouse: NextPage = () => {
    const [mouseCord, setMouseCord] = React.useState([0,0])
    React.useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setMouseCord([event.clientX, event.clientY])
        })
    }, [])
    return (
        <Bubble coordX={mouseCord[0]} coordY={mouseCord[1]} />
    )
}

export default Mouse