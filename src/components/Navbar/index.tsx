import { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Grid } from '@/ui/Grid'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { NavbarProps } from './navbar.interface'
import { NavbarContainer } from './navbar.styles'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { SongsContext } from '@/context/SongsContext'

export const Navbar: React.FC<NavbarProps> = ({ user = 'dayanna' }) => {
  const { filter, setFilter, dataSongs, setDataSongs } =
    useContext(SongsContext)
  const [openModal, setOpenModal] = useState(false)
  const scrollPosition = useScrollPosition() > 10
  const theme = useTheme()
  const isMobileXL = useMediaQuery('(min-width: 560px)')

  console.log('filter', filter)

  return (
    <NavbarContainer openModal={openModal} scrollPosition={scrollPosition}>
      <nav>
        <Grid container justifyContent='space-between'>
          <Grid item xs='10' sm='7' md='9'>
            <Input
              border
              size='small'
              hiddenLabel
              fullWidth
              value={filter}
              type='search'
              placeholder='Buscar'
              borderColor={c => c.palette.grey[500]}
              onChange={e => setFilter(e.target.value)}
            />
          </Grid>
          {isMobileXL ? (
            <Button
              variant='text'
              startIcon={
                <FaUser fontSize={14} color={theme.palette.primary.light} />
              }
            >
              Dayanna Villanueva
            </Button>
          ) : (
            <FaUser
              style={{ marginTop: 8, cursor: 'pointer' }}
              fontSize={20}
              color={theme.palette.primary.light}
              onClick={() => console.log('abrir profile')}
            />
          )}
        </Grid>
      </nav>
    </NavbarContainer>
  )
}
