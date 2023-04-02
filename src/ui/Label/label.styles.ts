import styled from 'styled-components'
import { LabelProps } from './label.interface'
import { getInputFontSize } from '@/functions/input'

export const LabelStyled = styled.label<LabelProps>`
  font-weight: 700;
  font-size: ${({ size = 'medium' }) => getInputFontSize(size)};
  color: ${({ theme, labelColor }) => labelColor && labelColor(theme)};
`
