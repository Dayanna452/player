import styled from 'styled-components'

import { DisplayProps, DisplayStyledProps } from './display.interface'

export const Display: React.FC<DisplayProps> = ({
  visible,
  children,
  closeDisplay
}) => {
  return (
    <Curtain visible={visible} onClick={() => closeDisplay(false)}>
      <Side visible={visible} onClick={e => e.stopPropagation()}>
        {children}
      </Side>
    </Curtain>
  )
}

const Curtain = styled.div<DisplayStyledProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => `${theme.palette.grey[300]}20`};
  z-index: 2000;
  left: ${({ visible }) => (visible ? '0' : '-100%')};
`

const Side = styled.div<DisplayStyledProps>`
  margin: -1px;
  position: fixed;
  overflow-y: auto;
  width: 280px;
  top: 0;
  bottom: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: left 500ms linear;
  left: ${({ visible }) => (visible ? '0' : '-300px')};
`
