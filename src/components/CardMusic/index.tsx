import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import { BsPauseFill } from 'react-icons/bs'
import { CardMusicProps } from './cardmusic.interface'
import { CardMusicStyled } from './cardmusic.styles'
import { useContext, useState } from 'react'
import { SongsContext } from '@/context/SongsContext'

export const CardMusic: React.FC<CardMusicProps> = ({ onClick, ...props }) => {
  const [play, setPlay] = useState<boolean>(false)
  const { oneSong, setOneSong } = useContext(SongsContext)

  return (
    <CardMusicStyled {...props}>
      <i className='more-button'>
        {props.more && <FiMoreVertical fontSize={32} color='#fff' />}
      </i>
      {play ? (
        <BsPauseFill
          fontSize={32}
          color='#fff'
          onClick={() => setPlay(false)}
        />
      ) : (
        <FaPlay
          fontSize={32}
          color='#fff'
          onClick={() => {
            setPlay(true)
            setOneSong(props.dataMusic)
          }}
        />
      )}

      <Image
        width={100}
        height={100}
        src={props.dataMusic.album?.cover || ''}
        alt={props.dataMusic.id.toString()}
      />
    </CardMusicStyled>
  )
}
