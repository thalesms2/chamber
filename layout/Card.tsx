import type { NextPage } from 'next'
import styled from 'styled-components'

interface CardProps {
    title: string
    children: any
    header?: boolean
}

interface CardWrapperProps {
  header?: boolean
}

const CardWrapper = styled.div<CardWrapperProps>`
    width: ${props => props.header ? '': '20%'};
    display: flex;
    flex-direction: column;
    background-color: ${props => props.header ? '#808080' : '#c1c1c1'};
    margin: .2em;
`
const Title = styled.h2`
    font-size: 1.2em;
    color: red;
`
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: .2em;
`

const Card: NextPage<CardProps> = (props) => {
  return (
    <CardWrapper header={props.header}>
        <Title>{props.title}</Title>
        <RowWrapper>
          {props.children}
        </RowWrapper>
    </CardWrapper>
  )
}

export default Card