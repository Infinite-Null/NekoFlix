import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getMangaCurrentReadingChapter() {
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
export async function getCurrentChapterManga(id) {
  try {
    const value = await AsyncStorage.getItem('continueReadingChapter');
    if (value[id] !== null) {
      return value[id]
    } else {
      return false
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function setMangaCurrentReadingChapter(mangaid,chapterId, mangaSlug, chapterSlug) {
  try {
    const value = await getMangaCurrentReadingChapter()
    value[mangaid] = {
      mangaid,chapterId, mangaSlug, chapterSlug,
    }
    await AsyncStorage.setItem('continueReadingChapter', JSON.stringify(value));
  } catch (e) {
    console.warn("error in search history", e)
  }
}
