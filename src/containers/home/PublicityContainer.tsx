import Image from 'next/image'

import { Grid } from '@/ui/Grid'
import { Text } from '@/ui/Text'
import { Button } from '@/ui/Button'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CardMusic } from '@/components/CardMusic'
import { Song } from '@/interfaces/song.interface'

interface PublicityContainerProps {
  music: Song
}

export const PublicityContainer: React.FC<PublicityContainerProps> = ({
  music
}) => {
  return (
    <Grid container>
      <Grid item xs='12' sm2='6' md2='25%'>
        <CardMusic dataMusic={music} size='extra-large' />
      </Grid>
      <Grid item xs='12' sm2='6' md2='75%' sx={{ position: 'relative' }}>
        <Image
          src={music.album.cover}
          width={100}
          height={100}
          alt=''
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.3,
            zIndex: -1,
            position: 'absolute'
          }}
        />
        <Grid
          container
          padding={20}
          sx={{ gap: 5, backgroundColor: '#FF767660', height: '100%' }}
        >
          <Grid item xs='12'>
            <Text
              tag='h2'
              text={music.artist.name}
              fontWeight={700}
              fontSize={{ xs: 18, md: 22 }}
              $color={c => c.palette.common.white}
            />
          </Grid>
          <Grid item xs='12' marginBottom={{ xs: 0, md: 15, lg: 10 }}>
            <Grid container>
              <Grid item xs='6' md='4'>
                <Text
                  tag='h3'
                  $color={c => c.palette.common.white}
                  fontSize={{ xs: 10, sm: 14 }}
                  text={`Lo mejor de ${music.artist.name}`}
                />
              </Grid>
              <Grid item xs='6' md='3'>
                <Text
                  tag='h3'
                  $color={c => c.palette.primary.dark}
                  fontSize={{ xs: 10, sm: 14 }}
                  text={`${music.rank} seguidores`}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs='12' paddingBottom={{ xs: 0, sm: 4, md: 10 }}>
            <Text
              tag='p'
              text={music.album.title}
              fontSize={{ xs: 11, sm: 14, md: 16 }}
              $color={c => c.palette.common.white}
            />
          </Grid>
          <Grid item xs='12' sm='4' lg='3'>
            <Button fullWidth shape='pill'>
              Reproducir
            </Button>
          </Grid>
          <Grid item xs='12' sm='4' lg='3'>
            <Button fullWidth variant='outlined' color='primary' shape='pill'>
              Seguir
            </Button>
          </Grid>
          <FiMoreHorizontal color='#fff' fontSize={30} />
        </Grid>
      </Grid>
    </Grid>
  )
}
