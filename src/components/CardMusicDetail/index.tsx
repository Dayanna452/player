import { Text } from '@/ui/Text'
import { CardMusic } from '../CardMusic'
import { CardMusicDetailProps } from './cardmusicdetail.interface'
import { CardMusicDetailStyled } from './cardmusicdetail.styles'

export const CardMusicDetail: React.FC<CardMusicDetailProps> = ({
  dataMusic
}) => {
  return (
    <CardMusicDetailStyled>
      <CardMusic more dataMusic={dataMusic} />
      <Text
        fontWeight={700}
        text={dataMusic.artist.name}
        $color={c => c.palette.grey[700]}
      />
      <Text
        fontSize={12}
        text={dataMusic.album.title}
        $color={c => c.palette.grey[400]}
      />
    </CardMusicDetailStyled>
  )
}
