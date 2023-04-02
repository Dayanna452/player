import { SizeType } from '@/interfaces/base.interface'
import { ThemeType } from '@/interfaces/theme.interface'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  hiddenLabel?: boolean
  label?: string
  fullWidth?: boolean
  size?: SizeType
  border?: boolean
  labelColor?: (theme: Pick<ThemeType, 'palette'>) => string
  borderColor?: (theme: Pick<ThemeType, 'palette'>) => string
  shadow?: boolean
}
