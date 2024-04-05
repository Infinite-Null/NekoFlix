import { EachEpisodeCard } from "./EachEpisodeCard";
import { HorizontalFlatList } from '@idiosync/horizontal-flatlist'
import { useCallback, useState } from "react";
import { DropdownPart } from "./DropdownPart";
import SimpleLoading from "../../../Global/Loading/SimpleLoading";
import { PlainText } from "../../../Global/PlainText";
import { PaddingConatiner } from "../../../../Layout/PaddingConatiner";

export const EpisodesDetails = ({links, isLoading}) => {
  let numRows = 3
  const TotalEpisodesDisplay = 50
   const keyExtractor = (item, row, col) => item + Math.random() + Math.random()
   const [selected, setSelected] = useState([1,TotalEpisodesDisplay]);
   const UpdateSelected = useCallback((value) => setSelected(value),[]);
  return (
    <>
      {!isLoading &&  <>
        {links.length > TotalEpisodesDisplay && <DropdownPart totalParts={Math.ceil(links.length / TotalEpisodesDisplay)} TotalEpisodesDisplay={TotalEpisodesDisplay} updateSelected={UpdateSelected} totalLength={links.length}/>}
        <HorizontalFlatList
          ListEmptyComponent={
            // eslint-disable-next-line react/no-unstable-nested-components
            (index)=><PaddingConatiner><PlainText text={"No Episodes Found 🙃"} key={index}/></PaddingConatiner>}
          data={links.slice(selected[0] - 1, selected[1])}
          showsHorizontalScrollIndicator={false}
          numRows={numRows}
          keyExtractor={keyExtractor}
          renderItem={({item, index})=><EachEpisodeCard image={item?.image} id={item?.id} title={item?.title} number={item?.number} key={item?.id}/>}
        />
      </>}
      {isLoading && <SimpleLoading containerStyle={{ height: 300 }} />}
    </>
  );
};
