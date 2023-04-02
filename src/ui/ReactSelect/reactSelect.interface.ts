import { SizeType } from '@/interfaces/base.interface'
import { ThemeType } from '@/interfaces/theme.interface'
import type { Props as ReactSelectProps } from 'react-select'

export interface MultiSelectUIProps extends Omit<ReactSelectProps, 'theme'> {
  size?: SizeType
  hiddenLabel?: boolean
  label?: string
  fullWidth?: boolean
  border?: boolean
  labelColor?: (theme: Pick<ThemeType, 'palette'>) => string
  borderColor?: (theme: Pick<ThemeType, 'palette'>) => string
  shadow?: boolean
  creatable?: boolean
  onCreateOption?: (value: string) => void
}
