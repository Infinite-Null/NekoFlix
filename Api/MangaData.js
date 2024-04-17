import axios from "axios";


async function GetHomepageData(){
  const data = []
  try {
    const response = await axios.get("https://earlym.org/api/home")
    return response.data
  } catch (e) {
    throw e
  }
}


async function GetMangaDetails(id,slug){
  try {
    const response = await axios.get(`https://earlym.org/api/manga/${id}/${slug}`)
    return response.data
  } catch (e) {
    throw e
  }
}
async function GetMangaChapters(id,slug){
  try {
    const response = await axios.get(`https://earlym.org/api/manga/${id}/${slug}/chapterlist`)
    return response.data
  } catch (e) {
    throw e
  }
}
export {GetHomepageData, GetMangaDetails, GetMangaChapters}
