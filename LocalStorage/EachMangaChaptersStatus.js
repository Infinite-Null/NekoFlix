import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAllMangaCurrentReadingChapter() {
  try {
    const value = await AsyncStorage.getItem('continueReadingChapter');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return {}
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function getMangaCurrentReadingChapter(id) {
  try {
    const value = await getAllMangaCurrentReadingChapter();
    if (value[id] === null || value[id] === undefined) {
      return false
    } else {
      return value[id]
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function setMangaCurrentReadingChapter(mangaid,chapterId, mangaSlug, chapterSlug) {
  try {
    const value = await getAllMangaCurrentReadingChapter()
    value[mangaid] = {
      mangaid,chapterId, mangaSlug, chapterSlug,
    }
    await AsyncStorage.setItem('continueReadingChapter', JSON.stringify(value));
  } catch (e) {
    console.warn("error in search history", e)
  }
}
