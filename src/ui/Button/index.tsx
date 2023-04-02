import { ButtonProps } from './button.interface'
import { ButtonContainer } from './button.styles'

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <ButtonContainer style={props.sx} ref={props.btnRef} {...props}>
      {props.startIcon && (
        <span className='button-startIcon'>{props.startIcon}</span>
      )}
      {props.loading && (
        <span className='button-startIcon'>
          {/*  <AiOutlineLoading3Quarters />{' '} */}
        </span>
      )}
      {props.children}
      {props.endIcon && <span className='button-endIcon'>{props.endIcon}</span>}
    </ButtonContainer>
  )
}
