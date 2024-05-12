import { memo, useEffect, useRef, useState } from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import VideoPlayer from "react-native-video-controls";
import { useOrientation } from "../../../CustomHook/CheckOrentation";
import { lockToLandscape, lockToPortrait, unlockAllOrientations } from "react-native-orientation-manager";
import { VideoPlayerNextPrev10sec } from "../../VideoPlayer/VideoPlayerNextPrev10sec";

export const Player = memo(function Player({url, navigation, number}){
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
      paused={false}
      source={{uri:url}}
      ref={videoRef}
      onError={()=>{}}
      style={isFullScreen ? fullScreenStyle.backgroundVideo : styles.backgroundVideo}
      showHours={true}
      title={ 'Episode ' + number }
      resizeMode={"contain"}
    />
    <VideoPlayerNextPrev10sec isFull={isFullScreen} onPress={()=>{
      if (!videoRef.current) {
        return;
      }
      videoRef.current.player.ref.seek(videoRef.current.state.currentTime - 9)
    }} image={require("../../../assets/AppImages/skipprev.png")} show={showControls} style={{
      left:40,
    }}/>
    <VideoPlayerNextPrev10sec  isFull={isFullScreen} onPress={()=>{
      videoRef.current.player.ref.seek(videoRef.current.state.currentTime + 9)
    }} image={require("../../../assets/AppImages/skipnext.png")} show={showControls} style={{
      right:40,
    }}/>
  </View>
});
