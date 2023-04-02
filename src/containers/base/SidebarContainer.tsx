import Image from 'next/image'
import styled from 'styled-components'

import { Text } from '@/ui/Text'
import { LinkButton } from '@/ui/LinkButton'

export const SidebarContainer = () => {
  return (
    <SidebarContainerStyled>
      <Image width={250} height={250} src='/img/foxbel-music@3x.png' alt='' />
      <div className='sections'>
        <Text
          text='Mi librería'
          fontWeight={700}
          $color={c => c.palette.common.white}
          fontSize={{ xs: 17, md: 20 }}
        />
        <LinkButton
          href='/'
          selection={true}
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Recientes
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Artistas
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Álbums
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Canciones
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Estaciones
        </LinkButton>
      </div>
      <div className='sections'>
        <Text
          fontWeight={700}
          text='Playlist'
          $color={c => c.palette.common.white}
          fontSize={{ xs: 17, md: 20 }}
        />
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Recientes
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Artistas
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Álbums
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Canciones
        </LinkButton>
        <LinkButton
          href='/'
          fontSize='small'
          $textColor={c => c.palette.common.white}
        >
          Estaciones
        </LinkButton>
      </div>
    </SidebarContainerStyled>
  )
}

const SidebarContainerStyled = styled.div`
  gap: 30px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${c => c.theme.palette.primary.dark};
  .sections {
    gap: 7px;
    display: flex;
    flex-direction: column;
  }
`
