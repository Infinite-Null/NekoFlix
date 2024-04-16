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
async function GetMangaPageData(page){
  const data = []
  try {
    const response = await axios.get("https://anilist.co/search/manga/" + page)
    const $ = cherio.load(response.data)
    const post = $('div.media-card')
    post.map((i,node)=>{
      const temp = {}
      node.childNodes.map((node,i)=>{
        if (node.name === 'a' && node.attribs.class === "cover"){
          const newStr = node.attribs.href.slice(7,node.attribs.href.length)
          temp.id = newStr.slice(0, newStr.indexOf("/"))
          node.childNodes.map((node,i)=>{
            if (node.name === 'img'){
              temp.image = node.attribs.src
            }
          })
        } else if (node.name === 'a' && node.attribs.class === "title"){
          node.children.map((node,i)=>{
            temp.name = node.data.replaceAll("\n","")
          })
        }
      })
      data.push(temp)
    })
  } catch (e) {
    console.log(e);
  }
  return data
}
export {getSearchManga,getMangaInfo, getMangaReadingChapters, GetMangaPageData}
