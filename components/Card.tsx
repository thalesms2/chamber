import type { NextPage } from "next";
import styled from "styled-components";

interface CardProps {
    title: string;
    children: any;
}

const CardWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background};
    margin: 0.2em;
`
const Title = styled.h2`
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.text};
`

const Card: NextPage<CardProps> = ({title, children}) => {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            {children}
        </CardWrapper>
    );
};

export default Card;
