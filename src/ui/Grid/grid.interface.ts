import { ThemeType } from '@/interfaces/theme.interface'
import {
  AlignItemsType,
  BreakpointSizesType,
  ColSpanType,
  GridDirectionType,
  JustifyContentType
} from '@/types/base.type'

export interface GridProps {
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string
  bgOpacity?: number
  borderRadius?: number
  gridRef?: React.RefObject<HTMLDivElement>
  padding?: number | BreakpointSizesType
  paddingX?: number | BreakpointSizesType
  paddingY?: number | BreakpointSizesType
  paddingTop?: number | BreakpointSizesType
  paddingLeft?: number | BreakpointSizesType
  paddingRight?: number | BreakpointSizesType
  paddingBottom?: number | BreakpointSizesType
  margin?: number | BreakpointSizesType
  marginX?: number | BreakpointSizesType
  marginY?: number | BreakpointSizesType
  marginTop?: number | BreakpointSizesType
  marginLeft?: number | BreakpointSizesType
  marginRight?: number | BreakpointSizesType
  marginBottom?: number | BreakpointSizesType
  children?: React.ReactNode
  container?: boolean
  item?: boolean
  spacing?: number
  xs?: ColSpanType | string
  xs2?: ColSpanType | string
  xs3?: ColSpanType | string
  sm?: ColSpanType | string
  sm2?: ColSpanType | string
  md?: ColSpanType | string
  md2?: ColSpanType | string
  lg?: ColSpanType | string
  lg2?: ColSpanType | string
  xl?: ColSpanType | string
  xl2?: ColSpanType | string
  direction?: GridDirectionType
  justifyContent?: JustifyContentType
  alignItems?: AlignItemsType
  sx?: React.CSSProperties
  cn?: string
  onClick?: () => void
}
