import type { NextPage } from 'next'
import styled from 'styled-components'

import Head from 'components/Head'

interface LinkProps {
    color: string
}

const Wrapper = styled.div `
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #252839;
    font-family: 'Mochiy Pop One', sans-serif;
`

const List = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Item = styled.li`
    position: relative;
    list-style: none;
`

const Link = styled.a<LinkProps>`
    font-size: 4em;
    text-decoration: none;
    letter-spacing: 2px;
    line-height: 1em;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
    &::before {
        content: attr(data-text);
        position: absolute;
        color: ${props => props.color};
        width: 0;
        overflow: hidden;
        transition: 1s;
        border-right: 8px solid ${props => props.color};
        -webkit-text-stroke: 1px ${props => props.color};  
    }
    &:hover::before{
        width: 100%;
        filter: drop-shadow(0 0 25px ${props => props.color});
    }
`



const Home: NextPage = () => {
    // azul vermelho amarelo verde rosa

    return (
        <Head title='Menu Animated'>
            <Wrapper>
                <List>
                    <Item>
                        <Link color="#00ade1" href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</Link>
                    </Item>
                    <Item>
                        <Link color="#ff6492" href="#" data-text="&nbsp;About">&nbsp;About&nbsp;</Link>
                    </Item>
                    <Item>
                        <Link color="#ffdd1c" href="#" data-text="&nbsp;Services">&nbsp;Services&nbsp;</Link>
                    </Item>
                    <Item>
                        <Link color="#00dc82" href="#" data-text="&nbsp;Blog">&nbsp;Blog&nbsp;</Link>
                    </Item>
                    <Item>
                        <Link color="#dc00d4" href="#" data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</Link>
                    </Item>
                </List>
            </Wrapper>
        </Head>
    )
}

export default Home