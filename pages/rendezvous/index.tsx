import type { NextPage } from 'next'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const teste = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(1500px);
    background-color: red
  }
`

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: black;
`
const WrapperActive = styled.div`
  width: 300px;
  height: 300px;
  background-color: black;
  animation: ${teste} linear 2s;
`

const Button = styled.button`
  color: white;
  background-color: black;
  padding: .5em 1em;
  margin: .5em;
`

const Home: NextPage = () => {
  const [anim, setAnim] = useState(true)
  return (
    <>
      { anim ? 
        <Wrapper/> :
        <WrapperActive /> }
      <Button onClick={() => setAnim(!anim)}>Change</Button>
    </>
  )
}

export default Home