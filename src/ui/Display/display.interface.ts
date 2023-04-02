export interface DisplayProps {
  visible: boolean
  children: React.ReactNode
  closeDisplay: React.Dispatch<React.SetStateAction<boolean>>
}
export interface DisplayStyledProps {
  visible?: boolean
}
