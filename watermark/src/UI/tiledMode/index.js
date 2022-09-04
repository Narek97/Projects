import React, { useContext, useMemo } from 'react'
import { StateContext } from '../../provider'
import * as Styled from './styled'

export const TiledMode = ({ screanRef }) => {
  const { state } = useContext(StateContext)

  const imgCount = useMemo(() => {
    return Math.ceil(
      Math.floor(
        screanRef.current.getBoundingClientRect().width /
          state.imageCropParams.width
      ) *
        Math.floor(
          screanRef.current.getBoundingClientRect().height /
            state.imageCropParams.height
        )
    )
  }, [state.imageCropParams.width, state.imageCropParams.height])

  return (
    <Styled.TiledMode>
      {new Array(imgCount).fill(0).map((_, idx) => (
        <Styled.TiledImg key={idx} data={state}>
          {state.type === 'image' ? (
            <Styled.Img allData={state} src={state.value} alt="" />
          ) : (
            <Styled.Text>{state.value}</Styled.Text>
          )}
        </Styled.TiledImg>
      ))}
    </Styled.TiledMode>
  )
}
