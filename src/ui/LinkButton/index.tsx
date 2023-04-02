import { DefaultTheme } from 'styled-components'

import { LinkContainer, LinkStyled, SelectionLink } from './link.styles'
import { LinkButtonProps } from './link.interface'

export const LinkButton: React.FC<LinkButtonProps> = ({ as, ...props }) => {
  const handleColor = (theme: Pick<DefaultTheme, 'palette'>) => {
    if (props.$textColor) {
      return props.$textColor(theme)
    } else {
      return theme.palette.common.black
    }
  }
  return (
    <LinkStyled>
      {props.selection && <SelectionLink></SelectionLink>}
      <LinkContainer
        $textColor={
          handleColor as string &
            ((theme: Pick<DefaultTheme, 'palette'>) => string)
        }
        {...props}
      >
        {props.children}
      </LinkContainer>
    </LinkStyled>
  )
}
