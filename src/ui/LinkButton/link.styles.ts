import Link from 'next/link'
import styled from 'styled-components'

import { LinkButtonProps } from './link.interface'
export const LinkStyled = styled.div`
  position: relative;
`

export const LinkContainer = styled(Link)<LinkButtonProps>`
  color: ${({ theme, $textColor: textColor, selection }) =>
    selection ? theme.palette.primary.light : textColor && textColor(theme)};
  font-size: ${({ fontSize = 'medium' }) =>
    fontSize === 'large' ? '18px' : fontSize === 'small' ? '14px' : '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`

export const SelectionLink = styled.div`
  width: 3px;
  top: 5px;
  left: -20px;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.light};
  height: 14px;
`
