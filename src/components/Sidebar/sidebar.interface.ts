export interface SideBarProps {
  firstIcon: React.ReactNode
  secondIcon: React.ReactNode
  children: React.ReactNode
  btnOnClick?: () => void
}

export interface FilterButtonProps {
  show: boolean
}
