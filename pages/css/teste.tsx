import type { NextPage } from 'next'
import styled from 'styled-components'

import Head from 'components/Head'



const Home: NextPage = () => {
  return (
    <Head title='teste de tailwindcss'>
      <h1 className="text-red-500 font-normal mt-1 ">Index</h1>
    </Head>
  )
}

export default Home