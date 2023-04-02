import { CardMusicDetail } from '@/components/CardMusicDetail'
import { Song } from '@/interfaces/song.interface'
import { Grid } from '@/ui/Grid'
import { Text } from '@/ui/Text'

interface SongsContainerProps {
  list: Song[]
}

export const SongsContainer: React.FC<SongsContainerProps> = ({ list }) => {
  return (
    <Grid container sx={{ gap: 20 }}>
      <Grid item xs='12'>
        <Text
          fontSize={22}
          fontWeight={700}
          text='Resultados'
          $color={c => c.palette.primary.main}
        />
      </Grid>
      <Grid item xs='12'>
        <Grid
          container
          justifyContent='space-between'
          sx={{ gap: 10, flexWrap: 'wrap' }}
        >
          {list.map((song: Song) => {
            return (
              <Grid item xs='12' sm='45%' md='3' lg='2' key={song.id}>
                <CardMusicDetail dataMusic={song} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
