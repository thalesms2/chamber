import type { NextPage } from 'next'
import styled from 'styled-components'

import BasicLayout from 'layout/Basic'

interface EyeProps {
    left? : boolean
    right? : boolean
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #FEEE9D;
`

const Head = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: #FBD671;
    box-shadow: inset -10px -10px 0px darken(#FBD671, 20%);
    `

const Face = styled.div`
    position: absolute;
    width: 150px;
    height: 170px;
    left: 75px;
    top: 75px;
`

const Mouth = styled.div`
    width: 100%;
    height: 75px;
    bottom: 0;
    left: 0;
    background-color: #20184E;
    border-radius: 10px 10px 150px 150px;
    border: 5px solid #20184E;
    overflow: hidden;
    position: absolute;
`

const Tongue = styled.div`
    width: 100px;
    height: 80px;
    left: 25px;
    top: 35px;
    background-color: #F15962;
    border-radius: 50%;
    position: absolute;
`

const EyeGroup = styled.div`
    width: 150px;
    height: 50px;
    top: 10px;
    left: 0;
    position: absolute;
`
const Eye = styled.div<EyeProps>`
    background-color: #20184E;
    width: 30px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    ${props => props.left ? 'left: 15px;' : 'right: 15px;'}
`
const Pupil = styled.div`
    width: 10px;
    height: 15px;
    position: absolute;
    top: 5px;
    background-color: #FBD671;
    border-radius: 50%;
`

const Home: NextPage = () => {
  return (
    <BasicLayout>
        <Wrapper>
            <Head>
                <Face>
                    <Mouth>
                        <Tongue />
                    </Mouth>
                    <EyeGroup>
                        <Eye left>
                            <Pupil className="pupil"></Pupil>
                        </Eye>
                        <Eye right>
                            <Pupil className="pupil"></Pupil>
                        </Eye>
                    </EyeGroup>
                </Face>
            </Head>
        </Wrapper>
    </BasicLayout>
  )
}

export default Home