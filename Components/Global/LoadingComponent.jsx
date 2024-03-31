import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "./PlainText";
import { useEffect } from "react";

export const LoadingComponent = ({showText}) => {
  function getRandomValue(){
    const randomValue = Math.floor(Math.random() * 6) + 1
    switch (randomValue) {
      case 1:
        return require(`../../assets/AppImages/Loading1.gif`)
      case 2:
        return require(`../../assets/AppImages/Loading2.gif`)
      case 3:
        return require(`../../assets/AppImages/Loading3.gif`)
      case 4:
        return require(`../../assets/AppImages/Loading4.gif`)
      case 5:
        return require(`../../assets/AppImages/Loading5.gif`)
      case 6:
        return require(`../../assets/AppImages/Loading6.gif`)
    }
  }
  useEffect(()=>{getRandomValue()},[])
  const stylesheet = StyleSheet.create({
    mainConatiner:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
  })
  return (
    <View style={stylesheet.mainConatiner}>
      <FastImage source={getRandomValue()} style={{
        height:100,
        width:100,
        objectFit:"fill",
      }}/>
      {showText &&  <PlainText text={"Loading ..."}/>}
    </View>
  );
};
