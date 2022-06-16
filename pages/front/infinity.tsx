import type { NextPage } from 'next'
import styled, { keyframes } from 'styled-components'

import BasicLayout from 'layout/Basic'

export const BackgroundContainer = styled.div`
    width: 350px;
    height: 150px;
    background: linear-gradient(0, #120c56, #000000);
    h1 {
        color: white;
    }
`

const animStar = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-150px);
    }
`

export const StarContainer = styled.div`
    position: relative;
    width: 3px;
	height: 3px;
	border-radius: 50%;
	box-shadow: 50px 30px white,
        100px 80px white,
        80px 120px white,
        300px 20px white,
        250px 130px white,
        200px 50px white,
        150px 100px white,
        320px 100px white;
    animation: ${animStar} 10s linear infinite;
    
    &:after{
        content: " ";
        position: absolute;
        top: 150px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        box-shadow: 50px 30px white,
        100px 80px white,
        80px 120px white,
        300px 20px white,
        250px 130px white,
        200px 50px white,
        150px 100px white,
        320px 100px white;
    }
`

export const StarContainer2 = styled.div`
    position: relative;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: 15px 15px white,
        125px 35px white,
        50px 80px white,
        10px 120px white,
        275px 90px white,
        230px 10px white,
        120px 130px white,
        300px 130px white,
        220px 115px white;
    animation: ${animStar} 20s linear infinite;

    &:after{
        content: " ";
        position: absolute;
        top: 150px;
        width: 1px;
        height: 1px;
        border-radius: 50%;
        box-shadow: 15px 15px white,
            125px 35px white,
            50px 80px white,
            10px 120px white,
            275px 90px white,
            230px 10px white,
            120px 130px white,
            300px 130px white,
            220px 115px white;
    }
`

const Infinity: NextPage = () => {
    return(
        <BasicLayout>
            <BackgroundContainer>
                <h1>Infinity</h1>
                <StarContainer />
                <StarContainer2 />
            </BackgroundContainer>
        </BasicLayout>
    )
}

export default Infinity