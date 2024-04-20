import { FlatList, StyleSheet} from "react-native";
import { EachAnimeCard } from "../../../Global/EachAnimeCard";
import { Spacer } from "../../../Global/Spacer";
import { memo } from "react";
import { PaddingConatiner } from "../../../../Layout/PaddingConatiner";
import { EachSectionLoading } from "../../../Global/Loading/EachSectionLoading";
import { FadeInDownLayout } from "../../../../Layout/FadeInDownLayout";
import { EachHeaderSection } from "../../../Global/EachHeaderSection";
export const Sections = memo(function Sections({results, title, isLoading, navigation}) {
  const stylesheet = StyleSheet.create({
    scrollViewStyle:{
      gap:10,
      paddingHorizontal:10,
    },
  })
  return (
    <>
     <PaddingConatiner>
       <EachHeaderSection title={title} showViewAll={true} OnPress={()=>{ if (!isLoading) {
         navigation.navigate("ViewAllAnimeSection",{title:title, data:results})
       }}}/>
     </PaddingConatiner>
      <Spacer/>
      <FadeInDownLayout>
        {isLoading && <EachSectionLoading/>}
        {!isLoading && <FlatList horizontal={true}
                                 showsHorizontalScrollIndicator={false}
                                 scrollEventThrottle={20000}
                                 contentContainerStyle={stylesheet.scrollViewStyle}
                                 data={results}
                                 keyExtractor={(item,index)=>index.toString()}
                                 renderItem={({ item, index })=>(
                                   <EachAnimeCard
                                     key={index}
                                     image={item?.image}
                                     name={item?.title}
                                     status={item?.status}
                                     genres={item?.genres}
                                     data={item}
                                     id={item.id}
                                     navigation={navigation}
                                   />)}/>
        }
      </FadeInDownLayout>
    </>
  );
})
