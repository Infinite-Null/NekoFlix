import { FadeInDownLayout } from "../../Layout/FadeInDownLayout";
import { FlatList } from "react-native";
import { EachAnimeCard } from "../../Components/Global/EachAnimeCard";
import { Heading } from "../../Components/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Spacer } from "../../Components/Global/Spacer";

export const ViewAllSectionsAnime = ({route, navigation}) => {
  const {title, data} = route.params
  return (
    <PaddingConatiner>
      <Heading text={title}/>
      <Spacer/>
      <FadeInDownLayout>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={20000}
          contentContainerStyle={{paddingBottom:120}}
          data={data}
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
      </FadeInDownLayout>
    </PaddingConatiner>
  );
};
