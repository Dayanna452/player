export interface Song {
  id: number
  name?: string
  album: Album
  duration?: number
  preview: string
  artist: Artist
  followers: number
  description: string
  explicit_content_cover?: number
  explicit_content_lyrics?: number
  explicit_lyrics?: boolean
  link?: string
  md5_image?: string
  rank?: number
  readable?: true
  title?: string
  title_short?: string
  title_version?: string
}

export interface Artist {
  id: number
  link?: string
  name?: string
  picture: string
  picture_big?: string
  picture_medium?: string
  picture_small?: string
  picture_xl?: string
  tracklist?: string
}

export interface Album {
  id: number
  cover: string
  cover_big?: string
  cover_medium?: string
  cover_small?: string
  cover_xl?: string
  md5_image?: string
  title: string
  tracklist?: string
}
