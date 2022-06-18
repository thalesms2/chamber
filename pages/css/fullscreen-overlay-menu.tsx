import type { NextPage } from 'next'
import styled from 'styled-components'

import BasicLayout from 'layout/Basic'

const Wrapper = styled.div`
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    input[type="checkbox"]{
        display: none;
    }
`

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
    clip-path: circle(25px at calc(100% - 45px) 45px);
    transition: all 0.3s ease-in-out;
    #active:checked ~ & {
        clip-path: circle(75%);
    }
    
`

const MenuBtn = styled.label`
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
    transition: all 0.3s ease-in-out;
    #active:checked + &{
        background: #fff;
        color: #4158d0;
    }
    #active:checked + & i:before{
        content: "\f00d";
    }
`

const List = styled.ul`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    li{
        margin: 15px 0;
    }
    li a{
        color: none;
        text-decoration: none;
        font-size: 30px;
        font-weight: 500;
        padding: 5px 30px;
        color: #fff;
        position: relative;
        line-height: 50px;
        transition: all 0.3s ease;
    }
    li a:after{
        position: absolute;
        content: "";
        background: #fff;
        width: 100%;
        height: 50px;
        left: 0;
        border-radius: 50px;
        transform: scaleY(0);
        z-index: -1;
        transition: transform 0.3s ease;
    }
    li a:hover:after{
        transform: scaleY(1);
    }
    li a:hover{
        color: #4158d0;
    }
`

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #b0b0b0;
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
`

const Text = styled.p`
    font-size: 35px;
    font-weight: 600;
`

const Home: NextPage = () => {
  return (
    <BasicLayout>
        <Wrapper>
            <input type="checkbox" id="active" />
            <MenuBtn htmlFor="active"><i className="fas fa-bars"></i></MenuBtn>
            <MenuWrapper>
                <List>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Feedback</a></li>
                </List>
            </MenuWrapper>
            <Content>
                <Title>Fullscreen Overlay Navigation Bar</Title>
                <Text>using only HTML & CSS</Text>
            </Content>
        </Wrapper>
    </BasicLayout>
  )
}

export default Home