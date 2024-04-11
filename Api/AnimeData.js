import axios from "axios";
import { GetServer } from "../LocalStorage/AppSettings";
async function getServerUrl(){
  const temp = await GetServer()
  if (temp === "Server 1"){
    return "https://anime-api-rest.vercel.app/"
  } else if (temp === "Server 2"){
    return  "https://anime-api-rest-sigma.vercel.app/"
  }
}
async function getPopularAnime(){
  const baseUrl = await getServerUrl()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "meta/anilist/popular",
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}

async function getTrendingAnime(){
  const baseUrl = await getServerUrl()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "meta/anilist/trending",
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}
async function getAiringScheduleAnime(){
  const baseUrl = await getServerUrl()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "meta/anilist/airing-schedule",
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}

async function getAnimeInfo(id){
  const baseUrl = await getServerUrl()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "meta/anilist/data/" + id,
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}

async function getAnimeEpisodes(id){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://consumet-api-p4wf.onrender.com/meta/anilist/episodes/" + id,
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}

async function getAnimeEpisodesStreamingLink(id){
  const baseUrl = await getServerUrl()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "meta/anilist/watch/" + id,
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}

async function getSearchAnime(search){
  const baseUrl = await getServerUrl()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseUrl + "meta/anilist/" + search,
    headers: { },
  };
  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    throw error
  }
}

export {getPopularAnime, getTrendingAnime, getAiringScheduleAnime, getAnimeInfo, getAnimeEpisodes, getAnimeEpisodesStreamingLink, getSearchAnime}
