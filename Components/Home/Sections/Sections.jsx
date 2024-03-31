import { Heading } from "../../Global/Heading";
import { FlatList, StyleSheet } from "react-native";
import { EachAnimeCard } from "../../Global/EachAnimeCard";
import { Spacer } from "../../Global/Spacer";
import { memo } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";

export const Sections = memo(function Sections({results, title}) {
  const stylesheet = StyleSheet.create({
    scrollViewStyle:{
      gap:10,
      paddingHorizontal:10,
    },
  })
  return (
    <>
     <PaddingConatiner>
       <Heading text={title} style={{
         fontWeight:"900",
         letterSpacing:0.5,
       }}/>
     </PaddingConatiner>
      <Spacer/>
      <FlatList horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={20000}
                contentContainerStyle={stylesheet.scrollViewStyle}
                data={results}
                renderItem={({ item, index })=>(<EachAnimeCard
                  key={index}
                  image={item?.image}
                  name={item?.title}
                  status={item?.status}
                  genres={item?.genres}
                  data={item}
                />)}/>
    </>
  );
})
