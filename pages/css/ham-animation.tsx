import type { NextPage } from 'next'
import styled from 'styled-components'

import BasicLayout from 'layout/Basic'
import { useState } from 'react'

interface HamProps {
    active?: boolean
}

const Wrapper = styled.div`
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const HamButton = styled.div<HamProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    div {
        width: 50px;
        height: 6px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: ${props => props.active ? "none" : "0 2px 5px rgba(255,101,47,.2)"};
        transition: all .5s ease-in-out;
        ${props => props.active ? "transform: translateX(-50px);" : ""}
        ${props => props.active ? "background: transparent;" : ""}
    }
    div::before,
    div::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 6px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255,101,47,.2);
        transition: all .5s ease-in-out;
    }
    div::before {
        transform: ${props => props.active ? "rotate(45deg) translate(35px, -35px)" : "translateY(-16px)"};
    }
    div::after {
        transform: ${props => props.active ? "rotate(-45deg) translate(35px, 35px)" : "translateY(16px)"};
    }
    .open div {
        transform: translateX(-50px);
        background: transparent;
    }
`

const Home: NextPage = () => {
    const [active, setActive] = useState(false)
    function handleClick() {
        active ? setActive(false) : setActive(true)
    }
    return (
        <BasicLayout>
            <Wrapper>
                <HamButton active={active} onClick={(e) => handleClick()}>
                    <div></div>
                </HamButton>
            </Wrapper>
        </BasicLayout>
    )
}

export default Home
