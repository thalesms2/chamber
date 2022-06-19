import type { NextPage } from 'next'
import { useState } from 'react'
import styled, { DefaultTheme, ThemeProvider} from 'styled-components'
import Switch from 'react-switch'
import { combineTheme, dark, light } from 'styles/themes'

import BasicLayout from 'layout/Basic'

import { GlobalStyle } from 'styles/global'

const Title = styled.h1`
  color: #808080;
  `

const Home: NextPage = () => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
  }
  return (
    <BasicLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
          className="m-2"/>
      </ThemeProvider>
      <Title>Index</Title>
    </BasicLayout>
  )
}

export default Home