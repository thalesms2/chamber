import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Slider from '@mui/material/Slider';
import Head from 'components/Head';

interface ExampleProps {
    topLeft: string
    topRight: string
    bottomRight: string
    bottomLeft: string
}

const Wrapper = styled.div`
    background-color: ${props => props.theme.colors.backgroundSecundary};
    margin: 1em 5em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Example = styled.div<ExampleProps>`
    background-color: ${props => props.theme.colors.primary};
    width: 300px;
    height: 300px;
    border-radius: ${props => props.topLeft} ${props => props.topRight} ${props => props.bottomRight} ${props => props.bottomLeft};
`

const BorderRadius: NextPage = () => {
    const [topLeft, setTopLeft] = React.useState(0)
    const [topRight, setTopRight] = React.useState(0)
    const [bottomRight, setBottomRight] = React.useState(0)
    const [bottomLeft, setBottomLeft] = React.useState(0)
    
    function valuetext(value: number) {
        return `${value}%`;
    }

    return (
        <Head title='Border Radius Editor'>
            <Wrapper>
                <Example 
                    topLeft={`${topLeft}%`}
                    topRight={`${topRight}%`}
                    bottomRight={`${bottomRight}%`}
                    bottomLeft={`${bottomLeft}%`}
                />
                <Slider
                    aria-label="Porcentagem"
                    value={topLeft}
                    onChange={(e: any) => setTopLeft(e.target.value)}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
                <Slider
                    aria-label="Porcentagem"
                    value={topRight}
                    onChange={(e: any) => setTopRight(e.target.value)}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
                <Slider
                    aria-label="Porcentagem"
                    value={bottomRight}
                    onChange={(e: any) => setBottomRight(e.target.value)}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
                <Slider
                    aria-label="Porcentagem"
                    value={bottomLeft}
                    onChange={(e: any) => setBottomLeft(e.target.value)}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
            </Wrapper>
        </Head>
    )
}

export default BorderRadius

// TODO Copy CSS to the clipboard
// TODO Add all props on border radius in order to create a complex shape