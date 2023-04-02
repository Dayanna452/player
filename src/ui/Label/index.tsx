import { LabelStyled } from './label.styles'
import { LabelProps } from './label.interface'
import { ThemeType } from '@/interfaces/theme.interface'

export const Label: React.FC<LabelProps> = ({ labelColor, ...props }) => {
  const handleColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (labelColor) {
      return labelColor(theme)
    } else {
      return theme.palette.grey[600]
    }
  }

  return (
    <LabelStyled labelColor={handleColor} {...props}>
      {props.children || 'Label'}
    </LabelStyled>
  )
}
