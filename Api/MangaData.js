import axios from "axios";


async function GetHomepageData(){
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
async function GetMangaChapterPages(id,slug,chapterId,chapterSlug){
  try {
    const response = await axios.get(`https://earlym.org/api/manga/${id}/${slug}/${chapterId}/chapter-${chapterSlug}?mangaId=${id}&chapterId=${chapterId}`)
    return response.data
  } catch (e) {
    throw e
  }
}
async function GetSearchManga(term){
  try {
    const response = await axios.get(`https://earlym.org/api/search?term=${term}`)
    return response.data
  } catch (e) {
    throw e
  }
}
export {GetHomepageData, GetMangaDetails, GetMangaChapters, GetMangaChapterPages, GetSearchManga}
