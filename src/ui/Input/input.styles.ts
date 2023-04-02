import styled from 'styled-components'

import { InputProps } from './input.interface'
import { getInputFontSize, getInputHeight } from '@/functions/input'

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  svg {
    font-size: 18px;
  }
`

export const InputWrapper = styled.div<InputProps>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 0px 10px;
  border-radius: 40px;
  border: ${({ theme, border, borderColor }) =>
    border && `1px solid ${borderColor && borderColor(theme)}`};
  box-shadow: ${({ shadow }) => shadow && '0px 1px 3px rgba(0, 0, 0, 0.08)'};
  background-color: ${({ theme }) => theme.palette.common.white};
  height: ${({ size }) => size && getInputHeight(size)};
  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: ${({ size }) => size && getInputFontSize(size)};

  input {
    padding: 13px;
    border-radius: inherit;
    outline: none;
    background-color: inherit;
    width: 100%;
    height: 100%;

    &:disabled {
      background-color: ${({ theme }) => theme.palette.grey[100]};
    }
  }
`
