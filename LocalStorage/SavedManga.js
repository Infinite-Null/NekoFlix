import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getSavedManga() {
  try {
    const value = await AsyncStorage.getItem('SavedManga');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return []
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function storeSavedManga (value){
  try {
    await AsyncStorage.setItem('SavedManga', value);
  } catch (e) {
    console.warn("error in saving search history", e)
  }
}
export async function removeSavedManga(id){
  try {
    const data = await getSavedManga()
    const newData = data.filter((item)=>{
      return item.id !== id
    })
    await  storeSavedManga(JSON.stringify(newData))
  } catch (e) {
    console.warn("error in removing search history", e)
  }
}
export async function addToSavedManga(value){
  try {
    const data = await getSavedManga()
    data.unshift(value)
    await storeSavedManga(JSON.stringify(data))
  } catch (e) {
    console.warn("error in adding search history", e)
  }
}
export async function isSavedManga(id){
  try {
    const data = await getSavedManga()
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
