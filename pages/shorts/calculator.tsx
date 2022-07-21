import Head from 'components/Head'
import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(6, auto);
    width: 400px;
    margin: 1em auto;
    background-color: ${props => props.theme.colors.backgroundSecundary};
`

const Cell = styled.button`
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    &:hover {
        background-color: ${props => props.theme.colors.backgroundSecundary};
    }
    &:active {
        background-color: ${props => props.theme.colors.background};
    }
`

const Zero = styled.button`
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    &:hover {
        background-color: ${props => props.theme.colors.backgroundSecundary};
    }
    &:active {
        background-color: ${props => props.theme.colors.background};
    }
    grid-column-start: 1;
    grid-column-end: 3;
`

const Equals = styled.button`
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 200px;
    &:hover {
        background-color: ${props => props.theme.colors.backgroundSecundary};
    }
    &:active {
        background-color: ${props => props.theme.colors.background};
    }
    grid-column: 4;
    grid-row-start: 5;
    grid-row-end: 7;
`

const Display = styled.div`
    width: 400px;
    height: 100px;
    grid-column-start: span 4;
`

const Calculator: NextPage = () => {
    const [result, setResult] = React.useState<number>()
    const [operation, setOperation] = React.useState<string>()
    function handleInsert(num: number) {
        if(!result) {
            setResult(num)
        } else {
            switch(operation) {
                case '+':
                    setOperation(undefined)
                    break
                case '-':
                    setOperation(undefined)
                    break
                case '*':
                    setOperation(undefined)
                    break
                case '/':
                    setOperation(undefined)
                    break
                case '=':
                    setOperation(undefined)
                    break
                case 'C':
                    setOperation(undefined)
                    break
                case 'R':
                    setOperation(undefined)
                    break
            }
        }
    }
    return (
        <Head title='Calculator'>
            <Wrapper>
                <Display>{result}</Display>
                <Cell>AC</Cell>
                <Cell>C</Cell>
                <Cell>*</Cell>
                <Cell>/</Cell>
                <Cell onClick={() => handleInsert(1)}>
                    1
                </Cell>
                <Cell onClick={() => handleInsert(2)}>2</Cell>
                <Cell onClick={() => handleInsert(3)}>3</Cell>
                <Cell>-</Cell>
                <Cell onClick={() => handleInsert(4)}>4</Cell>
                <Cell onClick={() => handleInsert(5)}>5</Cell>
                <Cell onClick={() => handleInsert(6)}>6</Cell>
                <Cell>+</Cell>
                <Cell onClick={() => handleInsert(7)}>7</Cell>
                <Cell onClick={() => handleInsert(8)}>8</Cell>
                <Cell onClick={() => handleInsert(9)}>9</Cell>
                <Equals>=</Equals>
                <Zero onClick={() => handleInsert(0)}>0</Zero>
                <Cell>.</Cell>
            </Wrapper>
        </Head>
    )
}

export default Calculator

