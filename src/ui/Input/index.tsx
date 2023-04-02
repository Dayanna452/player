import { BiSearch } from 'react-icons/bi'
import { useState, forwardRef } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { Label } from '../Label'
import { InputProps } from './input.interface'
import { ThemeType } from '@/interfaces/theme.interface'
import { InputContainer, InputWrapper } from './input.styles'

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      fullWidth,
      hiddenLabel,
      label,
      size = 'medium',
      border,
      labelColor,
      borderColor,
      shadow,
      type,
      ...props
    },
    ref
  ) => {
    const [passwordType, setPasswordType] = useState('password')

    const handleBorderColor = (theme: Pick<ThemeType, 'palette'>) => {
      if (borderColor) {
        return borderColor(theme)
      } else {
        return theme.palette.primary.main
      }
    }

    return (
      <InputContainer fullWidth={fullWidth}>
        {!hiddenLabel && (
          <Label labelColor={labelColor} size={size} htmlFor={id}>
            {label}
          </Label>
        )}
        <InputWrapper
          border={border}
          size={size}
          borderColor={handleBorderColor}
          shadow={shadow}
        >
          {type === 'search' && (
            <span style={{ paddingLeft: '13px' }}>
              <BiSearch />
            </span>
          )}
          <input
            type={type === 'password' ? passwordType : type ? type : 'text'}
            id={id}
            ref={ref}
            {...props}
          />

          {type === 'password' && (
            <span
              style={{ paddingRight: '13px', cursor: 'pointer' }}
              onClick={() =>
                setPasswordType(
                  passwordType === 'password' ? 'text' : 'password'
                )
              }
            >
              {passwordType === 'text' ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          )}
        </InputWrapper>
      </InputContainer>
    )
  }
)
