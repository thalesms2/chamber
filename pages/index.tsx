import type { NextPage } from 'next'
import styled from 'styled-components'

import BasicLayout from 'layout/Basic'

const Title = styled.h1`
  color: #808080;
`

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <Title>Index</Title>
    </BasicLayout>
  )
}

export default Home
