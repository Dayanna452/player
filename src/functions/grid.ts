import { BaseColorType } from '@/interfaces/base.interface'
import {
  AlignItemsType,
  BreakpointSizesType,
  ColSpanType,
  GridDirectionType,
  JustifyContentType
} from '@/types/base.type'
import { DefaultTheme } from 'styled-components'

export const getGridSpacing = (spacing: number) => {
  if (spacing >= 0 && spacing <= 12) {
    return `${spacing * 8}px`
  }
}

export const getBgColor = (
  theme: DefaultTheme,
  bgColor?: BaseColorType,
  bgOpacity?: number
) => {
  if (bgOpacity) {
    if (bgColor) {
      return `rgba(${theme.palette[bgColor].main},${bgOpacity})`
    }
  } else {
    if (bgColor) {
      return theme.palette[bgColor].main
    }
  }
}

export const getGridColSpan = (colSpan: ColSpanType) => {
  const options = {
    12: '100%',
    11: '91.6667%',
    10: '83.3333%',
    9: '75%',
    8: '66.6667%',
    7: '58.3333%',
    6: '50%',
    5: '41.6667%',
    4: '33.3333%',
    3: '25%',
    2: '16.6667%',
    1: '8.3333%'
  }

  return options[colSpan]
}

export const getDirection = (direction: GridDirectionType) => {
  const options = {
    row: 'row',
    'row-reverse': 'row-reverse',
    column: 'column',
    'column-reverse': 'column-reverse'
  }

  return options[direction]
}

export const getGridJustifyContent = (value: JustifyContentType) => {
  const options = {
    'flex-start': 'flex-start',
    center: 'center',
    'flex-end': 'flex-end',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly'
  }

  return options[value]
}

export const getGridAlignItems = (value: AlignItemsType) => {
  const options = {
    'flex-start': 'flex-start',
    center: 'center',
    'flex-end': 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline'
  }

  return options[value]
}

export const getDimensions = (
  all?: string | number | BreakpointSizesType,
  axisX?: string | number | BreakpointSizesType,
  axisY?: string | number | BreakpointSizesType,
  top?: string | number | BreakpointSizesType,
  right?: string | number | BreakpointSizesType,
  bottom?: string | number | BreakpointSizesType,
  left?: string | number | BreakpointSizesType
) => {
  return `${all || axisY || top}px ${all || axisX || right}px ${all ||
    axisY ||
    bottom}px ${all || axisX || left}px`
}

export const getTypePropsSm = (
  property?: number | BreakpointSizesType,
  propertyX?: number | BreakpointSizesType,
  propertyY?: number | BreakpointSizesType,
  propertyTop?: number | BreakpointSizesType,
  propertyBottom?: number | BreakpointSizesType,
  propertyRight?: number | BreakpointSizesType,
  propertyLeft?: number | BreakpointSizesType
) => {
  if (
    (typeof property !== 'number' && property?.sm) ||
    (typeof propertyX !== 'number' && propertyX?.sm) ||
    (typeof propertyY !== 'number' && propertyY?.sm) ||
    (typeof propertyTop !== 'number' && propertyTop?.sm) ||
    (typeof propertyBottom !== 'number' && propertyBottom?.sm) ||
    (typeof propertyRight !== 'number' && propertyRight?.sm) ||
    (typeof propertyLeft !== 'number' && propertyLeft?.sm)
  ) {
    return true
  } else {
    return false
  }
}

export const getTypePropsMd = (
  property?: number | BreakpointSizesType,
  propertyX?: number | BreakpointSizesType,
  propertyY?: number | BreakpointSizesType,
  propertyTop?: number | BreakpointSizesType,
  propertyBottom?: number | BreakpointSizesType,
  propertyRight?: number | BreakpointSizesType,
  propertyLeft?: number | BreakpointSizesType
) => {
  if (
    (typeof property !== 'number' && property?.md) ||
    (typeof propertyX !== 'number' && propertyX?.md) ||
    (typeof propertyY !== 'number' && propertyY?.md) ||
    (typeof propertyTop !== 'number' && propertyTop?.md) ||
    (typeof propertyBottom !== 'number' && propertyBottom?.md) ||
    (typeof propertyRight !== 'number' && propertyRight?.md) ||
    (typeof propertyLeft !== 'number' && propertyLeft?.md)
  ) {
    return true
  } else {
    return false
  }
}

export const getTypePropsLg = (
  property?: number | BreakpointSizesType,
  propertyX?: number | BreakpointSizesType,
  propertyY?: number | BreakpointSizesType,
  propertyTop?: number | BreakpointSizesType,
  propertyBottom?: number | BreakpointSizesType,
  propertyRight?: number | BreakpointSizesType,
  propertyLeft?: number | BreakpointSizesType
) => {
  if (
    (typeof property !== 'number' && property?.lg) ||
    (typeof propertyX !== 'number' && propertyX?.lg) ||
    (typeof propertyY !== 'number' && propertyY?.lg) ||
    (typeof propertyTop !== 'number' && propertyTop?.lg) ||
    (typeof propertyBottom !== 'number' && propertyBottom?.lg) ||
    (typeof propertyRight !== 'number' && propertyRight?.lg) ||
    (typeof propertyLeft !== 'number' && propertyLeft?.lg)
  ) {
    return true
  } else {
    return false
  }
}
export const getTypePropsXl = (
  property?: number | BreakpointSizesType,
  propertyX?: number | BreakpointSizesType,
  propertyY?: number | BreakpointSizesType,
  propertyTop?: number | BreakpointSizesType,
  propertyBottom?: number | BreakpointSizesType,
  propertyRight?: number | BreakpointSizesType,
  propertyLeft?: number | BreakpointSizesType
) => {
  if (
    (typeof property !== 'number' && property?.xl) ||
    (typeof propertyX !== 'number' && propertyX?.xl) ||
    (typeof propertyY !== 'number' && propertyY?.xl) ||
    (typeof propertyTop !== 'number' && propertyTop?.xl) ||
    (typeof propertyBottom !== 'number' && propertyBottom?.xl) ||
    (typeof propertyRight !== 'number' && propertyRight?.xl) ||
    (typeof propertyLeft !== 'number' && propertyLeft?.xl)
  ) {
    return true
  } else {
    return false
  }
}

export const getType = (property: number | BreakpointSizesType) => {
  if (typeof property === 'number') {
    return property
  } else {
    return property.xs
  }
}

export const getTypeSm = (property: number | BreakpointSizesType) => {
  if (typeof property === 'number') {
    return property
  } else {
    return property.sm
  }
}

export const getTypeMd = (property: number | BreakpointSizesType) => {
  if (typeof property === 'number') {
    return property
  } else {
    return property.md
  }
}

export const getTypeLg = (property: number | BreakpointSizesType) => {
  if (typeof property === 'number') {
    return property
  } else {
    return property.lg
  }
}

export const getTypeXl = (property: number | BreakpointSizesType) => {
  if (typeof property === 'number') {
    return property
  } else {
    return property.xl
  }
}
