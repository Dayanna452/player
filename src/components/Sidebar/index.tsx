import { useState } from 'react'

import { Display } from '@/ui/Display'
import { FilterButton } from './sidebar.styles'
import { SideBarProps } from './sidebar.interface'

export const SideBar: React.FC<SideBarProps> = ({
  firstIcon,
  secondIcon,
  children,
  btnOnClick
}) => {
  const [display, setDisplay] = useState(false)

  const showFilters = () => {
    if (display) {
      if (btnOnClick) {
        btnOnClick()
      } else {
        setDisplay(!display)
      }
    }
    setDisplay(!display)
  }

  const getIcon = ({
    firstIcon,
    secondIcon
  }: {
    firstIcon: React.ReactNode
    secondIcon: React.ReactNode
  }) => {
    if (display) {
      return firstIcon
    } else {
      return secondIcon
    }
  }

  return (
    <>
      <FilterButton show={display} onClick={showFilters}>
        {getIcon({ firstIcon, secondIcon })}
      </FilterButton>
      <Display visible={display} closeDisplay={setDisplay}>
        {children}
      </Display>
    </>
  )
}
