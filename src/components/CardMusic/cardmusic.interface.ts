import { Song } from '@/interfaces/song.interface'

export interface CardMusicProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  dataMusic: Song
  onClick?: () => void
  more?: boolean
}
