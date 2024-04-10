import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getContinueWatching() {
  try {
    const value = await AsyncStorage.getItem('continueWatching');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return []
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function storeContinueWatching (value){
  try {
    await AsyncStorage.setItem('continueWatching', value);
  } catch (e) {
    console.warn("error in saving search history", e)
  }
}

export async function clearContinueWatching(){
  try {
    await AsyncStorage.removeItem('continueWatching');
  } catch (e) {
    console.warn("error in clearing search history", e)
  }
}
export async function removeContinueWatching(value){
  try {
    const data = await getContinueWatching()
    const newData = data.filter((item)=>{
      return item !== value
    })
    await  storeContinueWatching(JSON.stringify(newData))
  } catch (e) {
    console.warn("error in removing search history", e)
  }
}

export async function addToContinueWatching(value){
  try {
    const data = await getContinueWatching()
    let include = false
    data.forEach((item)=>{
      if (item.id === value.id){
        include = true
      }
    })
    if (include){
      const newData = data.filter((item)=>{
        return item.id !== value.id
      })
      newData.unshift(value)
      await storeContinueWatching(JSON.stringify(newData))
    } else if (data.length >= 4){
      data.pop()
      data.unshift(value)
      await storeContinueWatching(JSON.stringify(data))
    } else {
      data.unshift(value)
      await storeContinueWatching(JSON.stringify(data))
    }
  } catch (e) {
    console.warn("error in adding search history", e)
  }
}
