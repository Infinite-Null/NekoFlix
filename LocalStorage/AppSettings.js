import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetFontSizeValue(){
  try {
    const value = await AsyncStorage.getItem('FontSize');
    if (value !== null) {
      return value
    } else {
      return 'Medium'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetFontSizeValue(FontSize){
  try {
    await AsyncStorage.setItem('FontSize', FontSize);
  } catch (e) {
    console.log("Font size Save Error");
  }
}

async function GetLanguage(){
  try {
    const value = await AsyncStorage.getItem('Language');
    if (value !== null) {
      return value
    } else {
      return 'English'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetLanguage(lang){
  try {
    await AsyncStorage.setItem('Language', lang);
  } catch (e) {
    console.log("Language Save Error");
  }
}

async function GetServer(){
  try {
    const value = await AsyncStorage.getItem('Server');
    if (value !== null) {
      return value
    } else {
      return 'Server 1'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetServer(value){
  try {
    await AsyncStorage.setItem('Server', value);
  } catch (e) {
    console.log("Server Save Error");
  }
}

async function GetHomePage(){
  try {
    const value = await AsyncStorage.getItem('home');
    if (value !== null) {
      return value
    } else {
      return 'Anime'
    }
  } catch (e) {
    // error reading value
  }
}

async function SetHomePage(home){
  try {
    await AsyncStorage.setItem('home', home);
  } catch (e) {
    console.log("Homepage Save Error");
  }
}
export {GetFontSizeValue, SetFontSizeValue, GetLanguage, SetLanguage, GetServer, SetServer, GetHomePage, SetHomePage}
