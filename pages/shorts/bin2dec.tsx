import Head from 'components/Head'
import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    margin: .5em;
    padding: .5em .2em;
    background-color: ${props => props.theme.colors.backgroundSecundary};
`

const BinDec: NextPage = () => {
    const [number, setNumber] = React.useState<number>()
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(parseInt((event.target as HTMLInputElement).value))
    }
    const renderNumber = (number: any) => {
        if (number) {
            const numberString = number.toString()
            for(let i = 0; i < numberString.length + 1; i++) {
                for(let j = 2; j < 10; j++) {
                    if(numberString[i] == j) {
                        return 'Informe um número binário!'
                    }
                }
            }
            return parseInt(number, 2)
        }
    }
    return (
        <Head title='Bin2Dec'>
            <Wrapper>
                <Input
                    type='number'
                    placeholder='Binario'
                    value={number}
                    onChange={handleInput}
                />
                {renderNumber(number)}
            </Wrapper>
        </Head>
    )
}

export default BinDec

// TODO Clickable selector for the binary number