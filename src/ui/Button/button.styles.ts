import styled, { css } from 'styled-components'

import { ButtonProps } from './button.interface'
import {
  getButtonBgColor,
  getButtonPadding,
  getButtonShape,
  getButtonSize,
  getButtonTextColor
} from '@/functions/button'

export const ButtonContainer = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color = 'primary', variant = 'contained' }) =>
    getButtonBgColor(theme, color, variant).bgColor};
  color: ${({ theme, color = 'primary', variant = 'contained' }) =>
    getButtonTextColor(theme, color, variant).textColor};
  font-weight: 500;
  font-size: ${({ size = 'medium' }) => getButtonSize(size)};
  line-height: 1.75;
  letter-spacing: 0.02857em;
  padding: ${({ size = 'medium' }) => getButtonPadding(size)};
  min-width: 64px;
  width: fit-content;
  border: ${({ theme, color = 'primary', variant = 'contained' }) =>
    variant === 'outlined' && `1px solid ${theme.palette[color].main}`};
  border-radius: ${({ shape = 'rounded' }) => getButtonShape(shape)};
  cursor: pointer;

  &:hover {
    border: ${({ theme, color = 'primary', variant = 'contained' }) =>
      variant === 'outlined' && `1px solid ${theme.palette[color].dark}`};
    background-color: ${({ theme, color = 'primary', variant = 'contained' }) =>
      getButtonBgColor(theme, color, variant).bgColorHover};
    color: ${({ theme, color = 'primary', variant = 'contained' }) =>
      getButtonTextColor(theme, color, variant).textColorHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grey[400]};
    cursor: not-allowed;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  .button-startIcon {
    margin-right: 8px;
  }

  .button-endIcon {
    margin-left: 8px;
  }
`
