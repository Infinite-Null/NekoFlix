import { memo, useRef, useState } from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import VideoPlayer from "react-native-video-controls";

export const Player = memo(function Player({url, navigation}){
  const videoRef = useRef(null);
  const {width, height} = Dimensions.get("window")
  const [isFullScreen, setIsFullScreen] = useState(false);
  var styles = StyleSheet.create({
    backgroundVideo: {
      height:width * 0.75,
      width:width,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    mainContainer:{
      height:width * 0.75,
      borderBottomWidth:2,
      borderBottomColor:"rgb(26,26,26)",
    },
    buffering:{
      flex:1,
      position:"absolute",
      height:30,
      width:30,
      zIndex:100,
    },
  });
  var fullScreenStyle = StyleSheet.create({
    mainContainer:{
        transform: [{ rotate: '90deg'}],
        height:width,
        borderBottomWidth:2,
        borderBottomColor:"rgb(26,26,26)",
        zIndex:100,
    },
    backgroundVideo: {
      height:width ,
      width:height,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  })
  return  <View style={isFullScreen ? fullScreenStyle.mainContainer : styles.mainContainer}>
    <StatusBar hidden={isFullScreen}/>
    <VideoPlayer
      navigator={navigation}
      seekColor={"red"}
      onEnterFullscreen={()=>{
       setIsFullScreen(true)
      }}
      onExitFullscreen={()=>{
        setIsFullScreen(false)
      }}
      paused={false}
      source={{uri:url}}
      ref={videoRef}
      onError={()=>{}}
      style={isFullScreen ? fullScreenStyle.backgroundVideo : styles.backgroundVideo}
      showHours={true}
    />
  </View>
});
