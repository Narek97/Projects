import React from 'react'
import * as Styled from './styled'
import { DATA } from '../../data/index'
import { Done, goToMainPage } from '../../reduser/action'

export const Footer = React.memo(({ state, dispatch }) => {
  return (
    <Styled.Footer>
      <Styled.Cancel onClick={() => dispatch(goToMainPage(DATA))}>
        Cancel
      </Styled.Cancel>
      <Styled.Done
        mode={state}
        disabled={!state && true}
        onClick={() => dispatch(Done())}
      >
        DONE
      </Styled.Done>
    </Styled.Footer>
  )
})
