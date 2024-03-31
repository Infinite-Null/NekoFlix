import { Heading } from "../../Global/Heading";
import { ScrollView, StyleSheet } from "react-native";
import { EachAnimeCard } from "../../Global/EachAnimeCard";
import { Spacer } from "../../Global/Spacer";

export const PopularAnimeSection = () => {
  const stylesheet = StyleSheet.create({
    scrollViewStyle:{
      gap:10,
    },
  })
  return (
    <>
    <Heading text={"Popular"}/>
      <Spacer/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={stylesheet.scrollViewStyle}>
        <EachAnimeCard/>
        <EachAnimeCard/>
        <EachAnimeCard/>
      </ScrollView>
    </>
  );
};
