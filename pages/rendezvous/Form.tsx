import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

interface Card {
  name: string
  colour: string
}

interface CardWrapper {
  colour: string
}

const FormWrapper = styled.div`
  background-color: #fff;
  input {
    border: 1px solid black;
    margin: .5em;
  }
`

const Button = styled.button`
  background-color: black;
  border-radius: 2em;
  padding: .2em .5em;
  color: white;
`
const CardWrapper = styled.div<CardWrapper>`
    color: ${props => props.colour};
    margin: .5em;
    border-radius: 1.5em;
    padding: .2em;
`

const Form: NextPage = () => {
  const [name, setName] = useState('')
  const [colour, setColour] = useState('')
  const [cards, setCards] = useState<Card[]>([])
  const handlerSubmit = () => {
    setCards([...cards, {
      name: name, 
      colour: colour
    }])
  }
  return (
    <FormWrapper>
      <input type="text" placeholder='Texto' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Cor' value={colour} onChange={(e) => setColour(e.target.value)} />
      <Button onClick={handlerSubmit}>Add</Button>
      <div>
        {cards.map((card: any) => {
            return(
                <CardWrapper key={card.name} colour={card.colour}>
                    <h2>{card.name}</h2>
                </CardWrapper>
            )
        })}
      </div>
    </FormWrapper>
  )
}

export default Form