import styled from 'styled-components'

export const MobilControlPanel = styled.div`
  min-height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.initial ? ` height: 15%` : `height: 100%`)}
`
