import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

import Head from "components/Head";
import Card from "components/Card";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Home: NextPage = () => {
    return (
        <Head title="Home" home>
            <Content>
                <Card title="Css">
                    <Link href="/css/first">
                        First
                    </Link>
                    <Link href="/css/teste">
                        Teste
                    </Link>
                    <Link href="/css/menu-animated">
                        Menu Animated
                    </Link>
                    <Link href="/css/login-form">
                        Login Form
                    </Link>
                    <Link href="/css/ham-animation">
                        Ham Animation
                    </Link>
                    <Link href="/css/fullscreen-overlay-menu">
                        Fullscreen Overlay Menu
                    </Link>
                </Card>
                <Card title="Front">
                    <Link href="/front/infinity">Infinito</Link>
                </Card>
                <Card title="Rendezvous">
                    <Link href="/rendezvous/form">
                        Form
                    </Link>
                    <Link href="/rendezvous/rpg">
                        Rpg
                    </Link>
                    <Link href="/rendezvous">
                        Rendezvous
                    </Link>
                </Card>
                <Card title="Shorts">
                    <Link href="/shorts/bin2dec">
                        Bin2Dec
                    </Link>
                    <Link href="/shorts/border-radius">
                        Border Radius Editor
                    </Link>
                    <Link href="/shorts/calculator">
                        Calculator
                    </Link>
                </Card>
            </Content>
        </Head>
    );
};

export default Home;

// TODO Global theme
// TODO Components reusable
// TODO Header with navigation menu
// TODO Homepage with explanation and all exercises
// TODO Refactor and organize folders
// TODO Break apart hooks and types


// Font 
// font-family: 'Edu VIC WA NT Beginner', cursive;
