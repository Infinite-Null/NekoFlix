import { Heading } from "../../Global/Heading";
import { FlatList, StyleSheet } from "react-native";
import { EachAnimeCard } from "../../Global/EachAnimeCard";
import { Spacer } from "../../Global/Spacer";
import { memo } from "react";
import { PaddingConatiner } from "../../../Layout/PaddingConatiner";
import Animated, { FadeInDown } from "react-native-reanimated";
import { EachSectionLoading } from "../../Global/Loading/EachSectionLoading";
import { FadeInDownLayout } from "../../../Layout/FadeInDownLayout";
export const Sections = memo(function Sections({results, title, isLoading}) {
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
      <FadeInDownLayout>
        {isLoading && <EachSectionLoading/>}
        {!isLoading && <FlatList horizontal={true}
                                 showsHorizontalScrollIndicator={false}
                                 scrollEventThrottle={20000}
                                 contentContainerStyle={stylesheet.scrollViewStyle}
                                 data={results}
                                 renderItem={({ item, index })=>(
                                   <EachAnimeCard
                                     key={index}
                                     image={item?.image}
                                     name={item?.title}
                                     status={item?.status}
                                     genres={item?.genres}
                                     data={item}
                                     id={item.id}
                                   />)}/>
        }
      </FadeInDownLayout>
    </>
  );
})
