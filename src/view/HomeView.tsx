import { Grid } from '@/ui/Grid'
import { SongsContainer } from '@/containers/home/SongsContainer'
import { PublicityContainer } from '@/containers/home/PublicityContainer'
import { useContext } from 'react'
import { SongsContext } from '@/context/SongsContext'
import { Song } from '@/interfaces/song.interface'
import { musicExample } from '@/utils/const'

export const HomeView = () => {
  const { dataSongs, oneSong } = useContext(SongsContext)
  console.log('dataSongs', dataSongs)

  return (
    <Grid container direction='column'>
      <PublicityContainer music={oneSong ? oneSong : musicExample} />
      <SongsContainer list={dataSongs} />
    </Grid>
  )
}
