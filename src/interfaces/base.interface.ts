import { GetServerSidePropsContext } from 'next'

export interface RedirectInterface {
  ctx: GetServerSidePropsContext
  location: string
  status?: number
}

export interface IconProps {
  iconSize?: string | number
  fill?: string
  stroke?: string
  height?: string | number
  width?: string | number
}

export type SizeType = 'small' | 'medium' | 'large'
export type ProgresType = 'valoration' | 'course'
export type PositionType = 'top' | 'start' | 'bottom' | 'end'
export type ShapeType = 'square' | 'rounded' | 'pill'
export type ButtonShapeType = 'square' | 'rounded' | 'half-pill' | 'pill'
export type ShadownType = 'small' | 'default' | 'large'
export type ButtonVariantType =
  | 'text'
  | 'contained'
  | 'outlined'
  | 'translucent'
export type PersonalInfo = 'direction' | 'email' | 'phone'
export type PaymentsType = 'credit-card' | 'paypal' | 'yape'
export type BaseColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

/* export type MutationCompleteType<T> = (
  data: T,
  clientOptions?:
    | BaseMutationOptions<
        any,
        OperationVariables,
        DefaultContext,
        ApolloCache<any>
      >
    | undefined
) => void */

export type QueryCompleteType<T> = (data: T) => void
