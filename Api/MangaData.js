import axios from "axios";
import { GetServer } from "../LocalStorage/AppSettings";
import  cherio from 'cheerio'
async function getServerUrl(){
  const temp = await GetServer()
  if (temp === "Server 1"){
    return "https://anime-api-rest.vercel.app/"
  } else if (temp === "Server 2"){
    return  "https://anime-api-rest-sigma.vercel.app/"
  }
}

async function getSearchManga(search){
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

async function getMangaInfo(id){
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

async function getMangaReadingChapters(){
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
async function GetHomepageData(){
  const data = []
  try {
    const response = await axios.get("https://earlym.org/api/home")
    return response.data
  } catch (e) {
    throw e
  }
}
export {getSearchManga,getMangaInfo, getMangaReadingChapters, GetHomepageData}
