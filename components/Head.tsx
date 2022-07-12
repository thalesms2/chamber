import React from 'react'
import { combineTheme, dark, light } from 'styles/themes'
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";
import Switch from 'react-switch';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import Link from 'next/link';

interface HeadProps {
    children: any
    title: string
    home?: boolean
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
    background-color: ${props => props.theme.colors.header};
    padding: 0 .5em;
`
const Title = styled.h1`
    font-size: 1.2em;
    margin-left: .5em;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Head = ({ title, children, home }: HeadProps) => {
    const [theme, setTheme] = React.useState<DefaultTheme>(combineTheme(light))
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
    }

    return (
        <ThemeProvider theme={theme}>
            <Header>
                <TitleWrapper>
                    { home ? '' : <Link href='/'><FaRegArrowAltCircleLeft fontSize={30} /></Link>}
                    <Title>{title}</Title>
                </TitleWrapper>
                <Switch 
                    checked={theme.title === 'dark'} 
                    onChange={toggleTheme} 
                    onColor="#86d3ff"
                    onHandleColor={theme.colors.primary}
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