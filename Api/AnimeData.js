import axios from "axios";

async function getPopularAnime(){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://anime-api-rest.vercel.app/meta/anilist/popular",
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
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://anime-api-rest.vercel.app/meta/anilist/trending",
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
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://anime-api-rest.vercel.app/meta/anilist/airing-schedule",
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
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://consumet-api-p4wf.onrender.com/meta/anilist/data/" + id,
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
export {getPopularAnime, getTrendingAnime, getAiringScheduleAnime, getAnimeInfo, getAnimeEpisodes}
