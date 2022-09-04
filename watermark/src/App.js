import React, { useReducer } from 'react'
import * as Styled from './styled'
import { Header } from './components/header'
import { Main } from './components/main'
import { Footer } from './components/footer'
import { DATA } from './data/index'
import { reducer } from './reduser/rootReducer'
import { StateContext, DispatchContext } from './provider/index'


function App() {
  const [state, dispatch] = useReducer(reducer, DATA)


  return (
    <Styled.App>
      <StateContext.Provider value={{ state }}>
        <DispatchContext.Provider value={{ dispatch }}>
          <Styled.Container>
            <Styled.Modal>
              <Header />
              <Main />
              <Footer state={state.value} dispatch={dispatch} />
            </Styled.Modal>
          </Styled.Container>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </Styled.App>
  )
}

export default App
