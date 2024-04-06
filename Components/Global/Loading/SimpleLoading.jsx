import React from 'react'
import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { PlainText } from '../PlainText'

export default function SimpleLoading({containerStyle, text}) {
    const style = StyleSheet.create({
        image:{
            height: 100,
            width: 100,
        },
        mainContainerStyle:{
            alignItems:'center',
            justifyContent:"center",
            ...containerStyle,
        },
    })
  return (
    <View style={style.mainContainerStyle}>
        <FastImage source={require("../../../assets/AppImages/Loading.gif")} style={style.image} resizeMode={FastImage.resizeMode.stretch}/>
        <PlainText text={text ? text : "Please Wait"}/>
    </View>
  )
}
