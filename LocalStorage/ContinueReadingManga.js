import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getContinueReading() {
  try {
    const value = await AsyncStorage.getItem('continueReading');
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return []
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function storeContinueReading (value){
  try {
    await AsyncStorage.setItem('continueReading', value);
  } catch (e) {
    console.warn("error in saving search history", e)
  }
}

export async function clearContinueReading(){
  try {
    await AsyncStorage.removeItem('continueReading');
  } catch (e) {
    console.warn("error in clearing search history", e)
  }
}
export async function removeContinueReading(value){
  try {
    const data = await getContinueReading()
    const newData = data.filter((item)=>{
      return item !== value
    })
    await  storeContinueReading(JSON.stringify(newData))
  } catch (e) {
    console.warn("error in removing search history", e)
  }
}

export async function addToContinueReading(value){
  try {
    const data = await getContinueReading()
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
      await storeContinueReading(JSON.stringify(newData))
    } else if (data.length > 21){
      data.pop()
      data.unshift(value)
      await storeContinueReading(JSON.stringify(data))
    } else {
      data.unshift(value)
      await storeContinueReading(JSON.stringify(data))
    }
  } catch (e) {
    console.warn("error in adding search history", e)
  }
}
