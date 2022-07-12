import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface CardProps {
    title: string
    children: JSX.Element|JSX.Element[]
}

const CardWrapper = styled.div`
    width: 300px;
    padding: .5em;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.backgroundSecundary};
    margin: 0.5em;
    border-radius: .8em;
    color: ${props => props.theme.colors.text};
`
const Title = styled.h2`
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.text};
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.text};
    margin: .5em 0;
`

const Option = styled.div`
    padding: .2em .2em;
    margin: .2em 0;
    &:hover {
        background-color: ${props => props.theme.colors.background};
        cursor: pointer;
    }
`

const Card: NextPage<CardProps> = ({title, children}) => {

    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Line />
            {React.Children.map(children, (link: any) => {
                return (
                    <Link href={link.props.href}>
                        <Option>
                            {link}
                        </Option>
                    </Link>
                )
            })}
        </CardWrapper>
    );
};

export default Card;
