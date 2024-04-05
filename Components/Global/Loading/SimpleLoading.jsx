import React from 'react'
import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { PlainText } from '../PlainText'

export default function SimpleLoading() {
    const style = StyleSheet.create({
        image:{
            flex:1,
            height: 100,
            width: 100,
        },
        mainContainerStyle:{
            flex:1,
            alignItems:'center',
            justifyContent:"center",
        },
    })
  return (
    <View style={style.mainContainerStyle}>
        <FastImage source={require("../../../assets/AppImages/Loading.gif")} style={style.image} resizeMode={FastImage.resizeMode.stretch}/>
        <PlainText text={"Please Wait"}/>
    </View>
  )
}
