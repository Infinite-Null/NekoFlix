import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getHistory() {
  try {
    const value = await AsyncStorage.getItem('history');
    if (value !== null) {
     return JSON.parse(value)
    } else {
      return []
    }
  } catch (e) {
    console.warn("error in search history", e)
  }
}
export async function storeHistory (value){
  try {
    await AsyncStorage.setItem('history', value);
  } catch (e) {
    console.warn("error in saving search history", e)
  }
}

export async function clearHistory(){
  try {
    await AsyncStorage.removeItem('history');
  } catch (e) {
    console.warn("error in clearing search history", e)
  }
}
export async function removeHistoryItem(value){
  try {
    const data = await getHistory()
    const newData = data.filter((item)=>{
      return item !== value
    })
    await  storeHistory(JSON.stringify(newData))
  } catch (e) {
    console.warn("error in removing search history", e)
  }
}

export async function addHistoryItem(value){
  try {
    const data = await getHistory()
    if (data.includes(value)){
      return;
    } else if (data.length >= 5){
      data.pop()
      data.unshift(value)
      await storeHistory(JSON.stringify(data))
    } else {
      data.unshift(value)
      await storeHistory(JSON.stringify(data))
    }
  } catch (e) {
    console.warn("error in adding search history", e)
  }
}
