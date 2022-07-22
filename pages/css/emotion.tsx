import React from 'react'
import type { NextPage } from 'next'
import { css } from '@emotion/react'



const Emotion: NextPage = () => {
    return (
        <React.Fragment>
            <div
                css={css`
                    width: 300px;
                    height: 300px;
                    background-color: blue;
                `} 
            />
        </React.Fragment>
    )
}

export default Emotion