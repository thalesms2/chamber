import type { NextPage } from 'next'
import styled from 'styled-components'

import BasicLayout from 'layout/Basic'



const Home: NextPage = () => {
  return (
    <BasicLayout>
      <h1 className="text-red-500 font-normal mt-1 ">Index</h1>
    </BasicLayout>
  )
}

export default Home