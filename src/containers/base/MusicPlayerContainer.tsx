import Image from 'next/image'
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from 'react-h5-audio-player'

import { Grid } from '@/ui/Grid'
import { Text } from '@/ui/Text'
import { Song } from '@/interfaces/song.interface'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useContext } from 'react'
import { SongsContext } from '@/context/SongsContext'

export const MusicPlayerContainer: React.FC = () => {
  const { dataSongs, oneSong } = useContext(SongsContext)
  const music = oneSong
  const isTabletM = useMediaQuery('(min-width: 900px)')
  return (
    <Grid container alignItems='center'>
      <Image width={100} height={100} src={music?.album.cover || ''} alt='' />
      <Grid item xs='68%' md='5'>
        <Grid container padding={10}>
          <Grid item xs='12'>
            <Text
              tag='h3'
              fontSize={{ xs: 10, sm: 14 }}
              text={music?.name || ''}
              fontWeight={700}
              $color={c => c.palette.common.white}
            />
          </Grid>
          <Grid item xs='12'>
            <Text
              tag='h3'
              fontSize={{ xs: 10, sm: 14 }}
              $color={c => c.palette.common.white}
              text={`${music?.artist.name || ''} - ${music?.album.title || ''}`}
            />
          </Grid>
          {!isTabletM && (
            <Grid item xs='12'>
              <AudioPlayer
                src={music?.preview || ''}
                className='rhap_loop--off'
                onPlay={e => console.log('onPlay')}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      {isTabletM && (
        <Grid item xs='5'>
          <AudioPlayer
            src={music?.preview || ''}
            className='rhap_loop--off'
            onPlay={e => console.log('onPlay')}
          />
        </Grid>
      )}
    </Grid>
  )
}
