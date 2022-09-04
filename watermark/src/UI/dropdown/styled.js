import styled from 'styled-components'

export const Dropdown = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #dee3f0;
  display: grid;
  grid-template-columns: 10% 76%;
  justify-content: center;
  align-items: center;
  gap: 5%;
  border-bottom: 1px solid #dee3f0;
  color: #7683a8;
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  background: #eef5ff;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0 2px 1px;
  }
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`
