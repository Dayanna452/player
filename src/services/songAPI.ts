import axios from 'axios'

const REQUEST_KEY = process.env.NEXT_PUBLIC_KEY

export const SONGS_API = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': REQUEST_KEY,
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
})
