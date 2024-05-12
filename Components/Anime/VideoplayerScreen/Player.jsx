import { memo, useEffect, useRef, useState } from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import VideoPlayer from "react-native-video-controls";
import { useOrientation } from "../../../CustomHook/CheckOrentation";
import { lockToLandscape, lockToPortrait, unlockAllOrientations } from "react-native-orientation-manager";
import { VideoPlayerNextPrev10sec } from "../../VideoPlayer/VideoPlayerNextPrev10sec";
import FastImage from "react-native-fast-image";

export const Player = memo(function Player({url, navigation, number, onNextPress, onPrevPress, Loading, setFullScreenValue}){
  const videoRef = useRef(null);
  const {width, height} = Dimensions.get("window")

  const [showControls, setShowControls] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const value = useOrientation()
  const styles = StyleSheet.create({
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
  });
  const fullScreenStyle = StyleSheet.create({
    mainContainer:{
        // transform: [{ rotate: '90deg'}],
        height:height,
        width:width,
        borderBottomWidth:2,
        borderBottomColor:"rgb(26,26,26)",
        zIndex:100,
    },
    backgroundVideo: {
      height:height ,
      width:width,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  })
  useEffect(() => {
    if (value === "PORTRAIT") {
      setIsFullScreen(false)
    } else {
      setIsFullScreen(true)
    }
  }, [value]);
  useEffect(()=>{
    return ()=>{
      unlockAllOrientations()
      StatusBar.setHidden(false)
    }
  },[])
  useEffect(() => {
    setFullScreenValue(isFullScreen)
    if (isFullScreen){
      StatusBar.setHidden(true)
    } else {
      StatusBar.setHidden(false)
    }
  }, [isFullScreen]);
  return  <View style={isFullScreen ? fullScreenStyle.mainContainer : styles.mainContainer}>
    <VideoPlayer
      onShowControls={()=>{
        setShowControls(true)
      }}
      onHideControls={()=>{
        setShowControls(false)
      }}
      onEnterFullscreen={()=>{
        lockToLandscape()
      }}
      onExitFullscreen={()=>{
        lockToPortrait()
        unlockAllOrientations()
      }}
      navigator={navigation}
      disableFocus={true}
      toggleResizeModeOnFullscreen={false}
      seekColor={"red"}
      paused={Loading}
      source={{uri:url}}
      ref={videoRef}
      onError={()=>{}}
      style={isFullScreen ? fullScreenStyle.backgroundVideo : styles.backgroundVideo}
      showHours={true}
      title={ 'Episode ' + number }
      resizeMode={"contain"}
    />
    {Loading &&  <FastImage source={require("../../../assets/AppImages/videoloading.gif")} style={{
      height:50,
      width:50,
      position:"absolute",
      bottom:isFullScreen ? (width * 0.75 ) / 3.8 : (width * 0.75 ) / 3,
      backgroundColor:"rgba(0,0,0,0.5)",
      borderRadius:1000000,
      left:width * 0.45,
    }} resizeMode={FastImage.resizeMode.stretch}/>}
    <VideoPlayerNextPrev10sec isFull={isFullScreen} onPress={onPrevPress} image={require("../../../assets/AppImages/prev.png")} show={showControls} style={{
      left:20,
    }}/>
    <VideoPlayerNextPrev10sec isFull={isFullScreen} onPress={()=>{
      if (!videoRef.current) {
        return;
      }
      videoRef.current.player.ref.seek(videoRef.current.state.currentTime - 9)
    }} image={require("../../../assets/AppImages/skipprev.png")} show={showControls} style={{
      left:isFullScreen?100:80,
    }}/>
    <VideoPlayerNextPrev10sec  isFull={isFullScreen} onPress={()=>{
      videoRef.current.player.ref.seek(videoRef.current.state.currentTime + 9)
    }} image={require("../../../assets/AppImages/skipnext.png")} show={showControls} style={{
      right:isFullScreen?100:80,
    }}/>
    <VideoPlayerNextPrev10sec isFull={isFullScreen} onPress={onNextPress} image={require("../../../assets/AppImages/next.png")} show={showControls} style={{
      right:20,
    }}/>
  </View>
});
