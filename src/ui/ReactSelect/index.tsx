import { ThemeType } from '@/interfaces/theme.interface'
import { MultiSelectUIProps } from './reactSelect.interface'
import {
  colourStyles,
  RSelectWrapper,
  ReactSelectWrapper,
  RCreatableWrapper
} from './reactSelect.styles'
import { Label } from '../Label'

export const ReactSelect: React.FC<MultiSelectUIProps> = ({ id, ...props }) => {
  const handleBorderColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (props.borderColor) {
      return props.borderColor(theme)
    } else {
      return theme.palette.primary.main
    }
  }

  const Select = props.creatable ? RCreatableWrapper : RSelectWrapper

  return (
    <ReactSelectWrapper fullWidth={props.fullWidth}>
      {!props.hiddenLabel && (
        <Label labelColor={props.labelColor} size={props.size} htmlFor={id}>
          {props.label}
        </Label>
      )}
      <Select
        styles={colourStyles}
        id={id}
        inputId={id}
        maxMenuHeight={props.maxMenuHeight || 205}
        borderColor={handleBorderColor}
        {...props}
      />
    </ReactSelectWrapper>
  )
}
