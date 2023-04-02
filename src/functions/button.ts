import { DefaultTheme } from 'styled-components'
import {
  BaseColorType,
  ButtonShapeType,
  ButtonVariantType,
  SizeType
} from '@/interfaces/base.interface'

export const getButtonBgColor = (
  theme: DefaultTheme,
  color: BaseColorType,
  variant: ButtonVariantType
) => {
  const options = {
    text: {
      bgColor: 'transparent',
      bgColorHover: 'transparent'
    },
    outlined: {
      bgColor: 'transparent',
      bgColorHover: 'transparent'
    },
    contained: {
      bgColor: theme.palette[color].main,
      bgColorHover: theme.palette[color].dark
    },
    translucent: {
      bgColor: `${theme.palette[color].main}1a`,
      bgColorHover: `${theme.palette[color].dark}26`
    }
  }
  return options[variant]
}

export const getButtonTextColor = (
  theme: DefaultTheme,
  color: BaseColorType,
  variant: ButtonVariantType
) => {
  const options = {
    text: {
      textColor: theme.palette[color].main,
      textColorHover: theme.palette[color].main
    },
    outlined: {
      textColor: theme.palette[color].main,
      textColorHover: theme.palette[color].dark
    },
    contained: {
      textColor: theme.palette[color].contrastText,
      textColorHover: theme.palette[color].contrastText
    },
    translucent: {
      textColor: theme.palette[color].main,
      textColorHover: theme.palette[color].dark
    }
  }
  return options[variant]
}

export const getButtonSize = (size: SizeType) => {
  const options = {
    small: '0.8125rem',
    medium: '0.875rem',
    large: '0.9375rem'
  }
  return options[size]
}

export const getButtonPadding = (size: SizeType) => {
  const options = {
    small: '4px 13px',
    medium: '6px 23px',
    large: '8px 26px'
  }
  return options[size]
}

export const getButtonShape = (shape: ButtonShapeType) => {
  const options = {
    pill: '40px',
    'half-pill': '20px',
    rounded: '4px',
    square: '0'
  }
  return options[shape]
}
