import styled from 'styled-components'
import { getInputHeight } from '@/functions/input'
import ReactSelect, { StylesConfig } from 'react-select'
import Creatable from 'react-select/creatable'
import { MultiSelectUIProps } from './reactSelect.interface'

export const colourStyles: StylesConfig<any, true> = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? '#0e4da4'
        : isFocused
        ? 'transparent'
        : undefined,
      color: isDisabled
        ? undefined
        : isSelected
        ? '#FFFFFF'
        : isFocused
        ? '#000000'
        : undefined
    }
  }
}

export const RSelectWrapper = styled(ReactSelect)<MultiSelectUIProps>`
  .css-13cymwt-control,
  .css-16xfy0z-control,
  .css-t3ipsp-control {
    border: ${({ theme, border, borderColor }) =>
      border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    box-shadow: ${({ shadow }) =>
      shadow ? '0px 1px 3px rgba(0, 0, 0, 0.08)' : 'none'};
    height: ${({ size = 'medium' }) => getInputHeight(size)};
    min-height: 36px;
    border-radius: 8px;

    &:hover {
      border: ${({ theme, border, borderColor }) =>
        border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    }

    & > .css-3w2yfm-ValueContainer,
    .css-1fdsijx-ValueContainer {
      height: 100%;
      overflow-y: auto;

      & > .css-1dimb5e-singleValue {
        color: #797979;
      }

      & > .css-1jqq78o-placeholder {
        color: ${({ theme: { palette } }) => palette.grey[400]};
        font-weight: 500;
      }

      & [role='button'] {
        cursor: pointer;
      }
      .css-1p3m7a8-multiValue {
        display: ${({ hideSelectedOptions }) => hideSelectedOptions && 'none'};
      }
    }

    & > .css-1hb7zxy-IndicatorsContainer {
      & > div {
        cursor: pointer;
      }
      & > span {
        display: none;
      }
    }
  }

  .css-1nmdiq5-menu {
    color: ${({ theme: { palette } }) => palette.common.black};
    border-radius: 8px;
    & > div {
      background-color: ${({ theme: { palette } }) => palette.common.white};
      border-radius: inherit;

      & > div {
        display: flex;
        align-items: center;
        height: ${({ size = 'medium' }) => getInputHeight(size)};
        cursor: pointer;

        &:hover {
          background-color: ${({ theme: { palette } }) => palette.primary.main};
          color: ${({ theme: { palette } }) => palette.common.white};
        }
      }

      .css-1wlit7h-NoOptionsMessage {
        color: #797979;
        cursor: default;
        &:hover {
          background-color: transparent;
          color: #797979;
        }
      }
    }
  }
`

export const RCreatableWrapper = styled(Creatable)<MultiSelectUIProps>`
  .css-13cymwt-control,
  .css-t3ipsp-control {
    border: ${({ theme, border, borderColor }) =>
      border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    box-shadow: ${({ shadow }) =>
      shadow ? '0px 1px 3px rgba(0, 0, 0, 0.08)' : 'none'};
    height: ${({ size = 'medium' }) => getInputHeight(size)};
    min-height: 36px;
    border-radius: 8px;

    &:hover {
      border: ${({ theme, border, borderColor }) =>
        border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    }

    & > .css-3w2yfm-ValueContainer,
    .css-1fdsijx-ValueContainer {
      height: 100%;
      overflow-y: auto;

      & > .css-1dimb5e-singleValue {
        color: #797979;
      }

      & > .css-1jqq78o-placeholder {
        color: ${({ theme: { palette } }) => palette.grey[400]};
        font-weight: 500;
      }

      & [role='button'] {
        cursor: pointer;
      }
      .css-1p3m7a8-multiValue {
        display: ${({ hideSelectedOptions }) => hideSelectedOptions && 'none'};
      }
    }

    & > .css-1hb7zxy-IndicatorsContainer {
      & > div {
        cursor: pointer;
      }
      & > span {
        display: none;
      }
    }
  }

  .css-1nmdiq5-menu {
    color: ${({ theme: { palette } }) => palette.common.black};
    border-radius: 8px;
    & > div {
      background-color: ${({ theme: { palette } }) => palette.common.white};
      border-radius: inherit;

      & > div {
        display: flex;
        align-items: center;
        height: ${({ size = 'medium' }) => getInputHeight(size)};
        cursor: pointer;

        &:hover {
          background-color: ${({ theme: { palette } }) => palette.primary.main};
          color: ${({ theme: { palette } }) => palette.common.white};
        }
      }

      .css-1wlit7h-NoOptionsMessage {
        color: #797979;
        cursor: default;
        &:hover {
          background-color: transparent;
          color: #797979;
        }
      }
    }
  }
`

export const ReactSelectWrapper = styled.div<MultiSelectUIProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ fullWidth }) => fullWidth && '100%'};
`
