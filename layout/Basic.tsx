import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
`

const BasicLayout = ({ children }: { children: any}) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default BasicLayout