import { memo } from "react";
import { Heading } from "../../../Global/Heading";
import { PaddingConatiner } from "../../../../Layout/PaddingConatiner";
import { FlatList } from "react-native";
import { EachCharacter } from "./EachCharacter";
import { PlainText } from "../../../Global/PlainText";
import { Spacer } from "../../../Global/Spacer";

export const CharacterDetails = memo(function CharacterDetails({characters}){
  return (
   <>
     <PaddingConatiner>
       <Heading text={"Characters"}/>
     </PaddingConatiner>
     <Spacer/>
     <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:10, paddingHorizontal:10}} horizontal={true} data={characters} renderItem={({item, index})=><EachCharacter
          key={item?.id}
          image={item?.image}
          name={item?.name}
          role={item?.role}
          voiceActors={item?.voiceActors}/>}
               ListEmptyComponent={
                 // eslint-disable-next-line react/no-unstable-nested-components
                 (index)=><PaddingConatiner><PlainText text={"No Episodes Found 🙃"} key={index}/></PaddingConatiner>}
     />
   </>
  );
})
