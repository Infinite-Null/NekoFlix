import { memo } from "react";
import { Heading } from "../../../Global/Heading";
import { PaddingConatiner } from "../../../../Layout/PaddingConatiner";
import { FlatList } from "react-native";
import { EachCharacter } from "./EachCharacter";
import { PlainText } from "../../../Global/PlainText";
import { Spacer } from "../../../Global/Spacer";

export const CharacterDetails = memo(function CharacterDetails({characters, updateVoiceActors, updateShow, updateCharacter}){
  return (
   <>
     <PaddingConatiner>
       <Heading text={"Characters"}/>
     </PaddingConatiner>
     <Spacer/>
     <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:10, paddingHorizontal:10}} horizontal={true} data={characters} renderItem={({item, index})=><EachCharacter setShow={updateShow} setVoiceActors={updateVoiceActors} updateCharacter={updateCharacter} key={item?.id} image={item?.image} name={item?.name} role={item?.role} voiceActors={item?.voiceActors}/>} ListEmptyComponent={
       // eslint-disable-next-line react/no-unstable-nested-components
       (index)=><PlainText text={"No Characters Found 🙃"} key={index}/>}
     />
   </>
  );
})
