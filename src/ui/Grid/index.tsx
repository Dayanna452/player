import { GridStyled } from '@/ui/Grid/grid.styles'
import { GridProps } from '@/ui/Grid/grid.interface'
import { ThemeType } from '@/interfaces/theme.interface'

export const Grid: React.FC<GridProps> = ({
  lg,
  md,
  sm,
  xl,
  xs,
  cn,
  sx,
  xs2,
  xs3,
  sm2,
  md2,
  lg2,
  xl2,
  item,
  gridRef,
  spacing,
  bgColor,
  children,
  container,
  bgOpacity,
  borderRadius,
  onClick,
  direction = 'row',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  padding = 0,
  paddingX = 0,
  paddingY = 0,
  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0,
  margin = 0,
  marginX = 0,
  marginY = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0
}) => {
  const handleColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (bgOpacity) {
      if (bgColor) {
        return `rgba(${bgColor(theme)},${bgOpacity})`
      }
    } else {
      if (bgColor) {
        return bgColor(theme)
      }
    }
  }
  return (
    <GridStyled
      lg={lg}
      md={md}
      sm={sm}
      xl={xl}
      xs={xs}
      xs2={xs2}
      xs3={xs3}
      sm2={sm2}
      md2={md2}
      lg2={lg2}
      xl2={xl2}
      style={sx}
      item={item}
      ref={gridRef}
      className={cn}
      onClick={onClick}
      bgColor={
        handleColor as string & ((theme: Pick<ThemeType, 'palette'>) => string)
      }
      spacing={spacing}
      container={container}
      direction={direction}
      bgOpacity={bgOpacity}
      alignItems={alignItems}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
    >
      {children}
    </GridStyled>
  )
}
