import styled from 'styled-components'
import bgImg from '../../img/Bg-img.png'
import { Flex } from '../../styled'

export const ImigContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #dee3f0;
`
export const BgImg = styled(Flex)`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  border: 1px solid #dee3f0;
  background: transparent url('${bgImg}');
  background-size: contain;
`
