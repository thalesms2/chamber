import { equal } from 'assert'
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
const DisplayPrimary = styled.div`

`
const DisplaySecundary = styled.div`

`

const Calculator: NextPage = () => {
    const [result, setResult] = React.useState<string>()
    const [operation, setOperation] = React.useState<string>()
    function handleNumberInsert(num: string) {
        if(!result) {
            setResult(num)
        } else {
            setResult(result + num)
        }
    }
    function handleOperationInsert(op: string) {
        if(result && operation) {
            setResult(undefined)
            setOperation(`${operation} ${result} ${op}`)
        } else if(result) {
            setResult(undefined)
            setOperation(`${result} ${op}`)
        }
    }
    function handleEquals() {
        if(operation && result) {
            let res = 0
            handleOperationInsert('=')
            const placeholder = `${operation} ${result} =`
            const digits = placeholder.split(' ')
            digits.forEach((element: string, index: number) => {
                if(element === '*') {
                    res = +digits[index-1] * +digits[index+1]
                    digits[index+1] = (+digits[index-1] * +digits[index+1]).toString()
                    console.log(digits)
                } else if(element === '/') {
                    res = +digits[index-1] / +digits[index+1]
                    digits[index+1] = (+digits[index-1] / +digits[index+1]).toString()
                    console.log(digits)
                }
            })
            digits.forEach((element: string, index: number) => {
                if(element === '+') {
                    res = +digits[index-1] + +digits[index+1]
                    digits[index+1] = (+digits[index-1] + +digits[index+1]).toString()
                    console.log(digits)
                } else if(element === '-') {
                    res = +digits[index-1] - +digits[index+1]
                    digits[index+1] = (+digits[index-1] - +digits[index+1]).toString()
                    console.log(digits)
                }
            })
            setResult(res.toString())
        }
    }
    function handleClear() {
        setOperation(undefined)
        setResult(undefined)
    }
    function handleBackspace() {
        if(result) {
            setResult(result.slice(0, result.length-1))
        }
    }
    return (
        <Head title='Calculator'>
            <Wrapper>
                <Display>
                    <DisplaySecundary>
                        {operation}
                    </DisplaySecundary>
                    <DisplayPrimary>
                        {result}
                    </DisplayPrimary>
                </Display>
                <Cell onClick={() => handleClear()}>AC</Cell>
                <Cell onClick={() => handleBackspace()}>C</Cell>
                <Cell onClick={() => handleOperationInsert('*')}>*</Cell>
                <Cell onClick={() => handleOperationInsert('/')}>/</Cell>
                <Cell onClick={() => handleNumberInsert('1')}>1</Cell>
                <Cell onClick={() => handleNumberInsert('2')}>2</Cell>
                <Cell onClick={() => handleNumberInsert('3')}>3</Cell>
                <Cell onClick={() => handleOperationInsert('-')}>-</Cell>
                <Cell onClick={() => handleNumberInsert('4')}>4</Cell>
                <Cell onClick={() => handleNumberInsert('5')}>5</Cell>
                <Cell onClick={() => handleNumberInsert('6')}>6</Cell>
                <Cell onClick={() => handleOperationInsert('+')}>+</Cell>
                <Cell onClick={() => handleNumberInsert('7')}>7</Cell>
                <Cell onClick={() => handleNumberInsert('8')}>8</Cell>
                <Cell onClick={() => handleNumberInsert('9')}>9</Cell>
                <Equals onClick={() => handleEquals()}>=</Equals>
                <Zero onClick={() => handleNumberInsert('0')}>0</Zero>
                <Cell onClick={() => handleNumberInsert('.')}>.</Cell>
            </Wrapper>
        </Head>
    )
}

export default Calculator

