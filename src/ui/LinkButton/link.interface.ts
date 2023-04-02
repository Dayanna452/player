import { LinkProps } from 'next/link'
import { DefaultTheme } from 'styled-components'

import { SizeType } from '@/interfaces/base.interface'

export interface LinkButtonProps extends LinkProps {
  children: React.ReactNode
  target?: React.HTMLAttributeAnchorTarget
  fontSize?: SizeType
  selection?: boolean
  fontWeight?: number | string
  $textColor?: (theme: Pick<DefaultTheme, 'palette'>) => string
}
