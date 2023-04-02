import { BreakpointSizesType, HtmlTags } from '@/types/base.type'

import { ThemeType } from '../../interfaces/theme.interface'

export interface TextProps
  extends React.BaseHTMLAttributes<HTMLHeadingElement> {
  tag?: HtmlTags
  textAlign?: string
  lineHeight?: number
  textTransform?: string
  textDecoration?: string
  sx?: React.CSSProperties
  text?: React.ReactNode
  fontWeight?: string | number
  fontSize?: number | BreakpointSizesType
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
}

export type TextStyledProps = Omit<TextProps, 'cn' | 'sx'>
