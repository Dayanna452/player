import { TextStyled } from './text.styles'
import { TextProps } from './text.interface'
import { ThemeType } from '@/interfaces/theme.interface'

export const Text: React.FC<TextProps> = ({
  sx,
  $color: color,
  textAlign,
  tag = 'h2',
  lineHeight,
  textTransform,
  fontSize = 16,
  textDecoration,
  text = 'Texto',
  fontWeight = 500,
  style,
  ...props
}) => {
  const handleColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (color) {
      return color(theme)
    } else {
      return theme.palette.common.black
    }
  }

  return (
    <TextStyled
      as={tag}
      style={sx || style}
      fontSize={fontSize}
      textAlign={textAlign}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textTransform={textTransform}
      textDecoration={textDecoration}
      $color={
        handleColor as string & ((theme: Pick<ThemeType, 'palette'>) => string)
      }
      {...props}
    >
      {text}
    </TextStyled>
  )
}
