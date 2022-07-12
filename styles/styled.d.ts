import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            primary: string
            header: string
            background: string
            backgroundSecundary: string
            text: string
        }
        fontSizes: {
            small: string
            medium: string
            large: string
        }
    }
    export interface CustomTheme {
        title: string
        colors: {
            primary: string
            header: string
            background: string
            backgroundSecundary: string
            text: string
        }
    }
}