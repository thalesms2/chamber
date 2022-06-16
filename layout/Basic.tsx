import { createGlobalStyle } from "styled-components";

interface BasicProps {
    backgroundColor?: string
    children: any
}

interface GlobalStyleProps {
    backgroundColor: string
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
    }
    body {
        background: ${props => props.backgroundColor};
        color: #808080;
    }
`

const BasicLayout = ({ backgroundColor, children }: BasicProps) => {
    return (
        <>
            <GlobalStyle backgroundColor={backgroundColor || "#000"}/>
            {children}
        </>
    )
}

export default BasicLayout