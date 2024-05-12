import { Dimensions, Pressable, ScrollView } from "react-native";
import { SmallText } from "../Global/SmallText";
import { Heading } from "../Global/Heading";
import React, { memo, useState } from "react";

export const EpiosdesRender = memo(({totalEpisodes, current, onPress}) => {
  const {width} = Dimensions.get("window")
  const ref = React.useRef(null)
  const [show, setShow] = useState(false);
  React.useEffect(() => {
    setTimeout(()=>{
      setShow(true)
      const line  = Math.floor(current / 6)
      ref.current?.scrollTo({x:line * 35, animated: true})
    },500)
  }, [])
  return (
    <>
      <Heading text={"Episodes"} style={{padding:10}}/>
      {show && <ScrollView  contentContainerStyle={{
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        paddingHorizontal:width * 0.04,
      }} ref={ref}>
        {totalEpisodes.map((e, index) => {
          return <EpisodesDetailsCard
            key={index}
            number={e.number}
            id={e.id}
            onPress={onPress}
            current={current}
          />
        })}
      </ScrollView>}
    </>
  );
})

const EpisodesDetailsCard = memo(function EpisodesDetailsCard({number, id, current, onPress}) {
    const {width} = Dimensions.get("window")
    return (<Pressable onPress={()=>{
        onPress(number, id)
      }} style={{
        padding:10,
        backgroundColor:(current === number) ? "rgb(141,13,13)" : "rgb(32,32,32)",
        borderRadius:5,
        margin:width * 0.009,
        width:width * 0.13,
        alignItems:"center",
        justifyContent:"center",
        height:35,
      }}>
        <SmallText text={number} style={{
          fontWeight:"900",
        }}/>
      </Pressable>
    );
})
