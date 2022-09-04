import * as Styled from './styled'
import { AudioPanel } from './components/audio_panel'
import { Main } from './components/main'

function App() {
  return (
    <Styled.App>
      <Main />
      <AudioPanel />
    </Styled.App>
  )
}

export default App
