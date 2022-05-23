# Guide
> Start a project with Next.js and Styled-Components

## Next.js and dependencies

Initial installation
```bash
yarn create next-app --typescript
yarn add styled-components
yarn add -D @types/styled-components 
yarn add -D babel-plugin-styled-components
```

The babel plugin gives more power-ups to styled-components + Nextjs:

- Smaller bundles
- Server-side rendering compatibility
- Better debugging
- Minification
- Dead code elimination
- More descriptive className

At the root of the project create a file `.babelrc`
```json
{
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true }]]
}
```


### Absolute imports

Inside `tsconfig.json`
```json
"compilerOptions": {
    // ...other options
    "baseUrl": "."
},
```

Inside `pages/index.tsx`
```js
// Older
import BasicLayout from "../layout/Basic"

// New
import BasicLayout from "layout/Basic"
```


### SSR with stylesheet rehydration

The fancy term which means: serve the required styles for the first render within the HTML and then load the rest in the client.

You need to create a custom `/pages/_document.tsx` and copy the following logic into it. That's it.
```js
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
```


### Apply globalStyle

Outside the `/pages` directory, create another folder `/layout` with `Basic.tsx` inside:
```
# /layout
# --/Basic.tsx
# /pages
# --/index.tsx
```

Inside `Basic.tsx`
```js
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  //CSS global
`

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default BasicLayout
```

Inside `pages/index.tsx`
```js
import styled from "styled-components"
import BasicLayout from "../layout/Basic"

const Title = styled.h1`
  color: red;
`

const Home = () => {
  return (
    <BasicLayout>
      <Title>Title</Title>
    </BasicLayout>
  )
}

export default Home
```

## Reference

- [Nextjs + typescript + styled-components](https://dev.to/rffaguiar/nextjs-typescript-styled-components-1i3m)
