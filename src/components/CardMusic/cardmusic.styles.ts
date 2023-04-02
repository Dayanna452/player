import styled from 'styled-components'
import { getSizePreview } from '@/functions/cardmusic'
import { CardMusicProps } from './cardmusic.interface'

export const CardMusicStyled = styled.div<Omit<CardMusicProps, 'onClick'>>`
  position: relative;
  svg {
    position: absolute;
    top: 45%;
    left: 45%;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .more-button {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 40px;
  }
`
