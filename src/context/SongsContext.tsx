import { createContext, useEffect } from 'react'

import { useSong } from '@/hooks/useSong'
import { Song } from '@/interfaces/song.interface'

interface SongContextProps {
  dataSongs: []
  filter: string
  oneSong: Song | undefined
  getData: () => Promise<void>
  setFilter: React.Dispatch<React.SetStateAction<string>>
  setOneSong: React.Dispatch<React.SetStateAction<Song | undefined>>
  setDataSongs: React.Dispatch<React.SetStateAction<[]>>
}

export const SongsContext = createContext({} as SongContextProps)

interface Props {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const song = useSong()

  useEffect(() => {
    if (song.filter !== '') {
      song.getData()
    }
  }, [song.filter])

  return <SongsContext.Provider value={song}>{children}</SongsContext.Provider>
}

const Consumer = SongsContext.Consumer
const songsData = { Consumer, Provider }
export default songsData
