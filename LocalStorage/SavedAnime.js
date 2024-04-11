import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getSavedAnime() {
  try {
    const value = await AsyncStorage.getItem('SavedAnime');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return []
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function storeSavedAnime (value){
  try {
    await AsyncStorage.setItem('SavedAnime', value);
  } catch (e) {
    console.warn("error in saving search history", e)
  }
}

export async function clearSavedAnime(){
  try {
    await AsyncStorage.removeItem('SavedAnime');
  } catch (e) {
    console.warn("error in clearing search history", e)
  }
}
export async function removeSavedAnime(id){
  try {
    const data = await getSavedAnime()
    const newData = data.filter((item)=>{
      return item.id !== id
    })
    await  storeSavedAnime(JSON.stringify(newData))
  } catch (e) {
    console.warn("error in removing search history", e)
  }
}

export async function addToSavedAnime(value){
  try {
    const data = await getSavedAnime()
    data.unshift(value)
    await storeSavedAnime(JSON.stringify(data))
  } catch (e) {
    console.warn("error in adding search history", e)
  }
}

export async function isSavedAnime(id){
  try {
    const data = await getSavedAnime()
    data.forEach((item)=>{
      if (item.id === id){
        throw new Error("exit")
      }
    })
    return false
  } catch (e) {
    return true
  }
}
