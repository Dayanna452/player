import {
  BaseColorType,
  ButtonShapeType,
  ButtonVariantType,
  SizeType
} from '@/interfaces/base.interface'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  fullWidth?: boolean
  color?: BaseColorType
  shape?: ButtonShapeType
  sx?: React.CSSProperties
  endIcon?: React.ReactNode
  size?: SizeType
  startIcon?: React.ReactNode
  variant?: ButtonVariantType
  btnRef?: React.MutableRefObject<any>
}
