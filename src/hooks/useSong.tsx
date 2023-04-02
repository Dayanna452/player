import { useState } from 'react'
import { SONGS_API } from '@/services/songAPI'
import { Song } from '@/interfaces/song.interface'

export const useSong = () => {
  const [filter, setFilter] = useState<string>(' ')
  const [oneSong, setOneSong] = useState<Song>()
  const [dataSongs, setDataSongs] = useState<[]>([])

  const getData = async () => {
    try {
      const res = await SONGS_API.get(`search?q=${filter}}`)
      setDataSongs(res.data.data)
      setOneSong(res.data.data[0])
    } catch (err) {
      console.log('error', err)
    }
  }
  return {
    getData,
    filter,
    setFilter,
    dataSongs,
    oneSong,
    setOneSong,
    setDataSongs
  }
}
