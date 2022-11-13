import {base_url,trending_movie,new_releases,coming_soon} from './Urls/Urls'
import { api_key } from './api_key'
import axios from 'axios'
const get_trending = ()=>{
    // console.log(`${base_url}${trending_movie}?api_key=${api_key}&page=1`)
    return axios.get(`${base_url}${trending_movie}?api_key=${api_key}&page=1`)
}
const get_new_releases = ()=>{
    return axios.get(`${base_url}${new_releases}?api_key=${api_key}&page=1`)
}
const get_upcoming = ()=>{
    return axios.get(`${base_url}${coming_soon}?api_key=${api_key}&page=1`)
}
// https://image.tmdb.org/t/p/original/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg
function get_image_original(path){
    return `https://image.tmdb.org/t/p/original${path}`
}
export  {
    get_trending, get_image_original, get_new_releases, get_upcoming
}
