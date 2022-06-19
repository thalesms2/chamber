import type { AppProps } from 'next/app'

// Tailwindcss
import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp