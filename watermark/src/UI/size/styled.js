import styled from 'styled-components'

export const Size = styled.div`
  color: #7683a8;
  border-bottom: 1px solid #dee3f0;
  display: grid;
  grid-template-columns: 10% 60% 15%;
  justify-content: center;
  gap: 3%;
  align-items: center;
`

export const ImputeRange = styled.input`
  height: 3px;
  border-radius: 4px;
`
export const ImputeColor = styled.input`
  width: 80%;
  height: 75%;
  border: 1px solid #dee3f0;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 1px;
    margin: 0;
  }
`
