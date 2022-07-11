import React from 'react'
import { combineTheme, dark, light } from 'styles/themes'
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";
import Switch from 'react-switch';

interface WrapperProps {
    children: any
    title: string
}

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
    }
    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    font-size: 1.2em;
    margin-left: .5em;
`

const Head = ({ title, children }: WrapperProps) => {
    const [theme, setTheme] = React.useState<DefaultTheme>(combineTheme(light))
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
    }

    return (
        <ThemeProvider theme={theme}>
            <Header>
                <Title>{title}</Title>
                <Switch 
                    checked={theme.title === 'dark'} 
                    onChange={toggleTheme} 
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="m-2"
                />
            </Header>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default Head

// TODO back button when has a prop