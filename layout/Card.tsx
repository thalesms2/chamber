import type { NextPage } from 'next'
import styled from 'styled-components'

interface CardProps {
    title: string
    children: any
}

const CardWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: 1.2em;
    color: red;

`

const Card: NextPage<CardProps> = (props) => {

  return (
    <CardWrapper>
        <Title>{props.title}</Title>
        {props.children}
    </CardWrapper>
  )
}

export default Card