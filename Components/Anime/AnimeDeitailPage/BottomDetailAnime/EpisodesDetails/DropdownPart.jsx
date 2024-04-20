import { memo } from "react";
import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list/index";
import { Spacer } from "../../../../Global/Spacer";

export const DropdownPart = memo(function DropdownPart({totalParts, updateSelected, totalLength, TotalEpisodesDisplay}){
  const data = Array.from({length:totalParts}, (_, i) => {
    if (i === totalParts - 1){
      return {value: `${(i * TotalEpisodesDisplay) + 1} - ${totalLength}`}
    } else {
      return {value: `${(i * TotalEpisodesDisplay) + 1} - ${(i * TotalEpisodesDisplay) + TotalEpisodesDisplay}`}
    }
  })
  return (
    <>
      <View style={{
        zIndex:100,
        minWidth:150,
      }}>
        <SelectList
          placeholder={data[0].value}
          search={false}
          setSelected={(val) => {
            const Break = val.split(" - ");
            const start = parseInt(Break[0]);
            const end = parseInt(Break[1]);
            updateSelected([start, end])
          }}
          dropdownTextStyles={{color:"white"}}
          data={data}
          save="value"
          inputStyles={{
            color:"white",
          }}
          boxStyles={{paddingHorizontal:10, maxWidth:150,marginHorizontal:10, borderWidth:0, backgroundColor:"rgb(33,33,33)", color:"white"}}
          dropdownStyles={{backgroundColor:"rgb(33,33,33)", borderWidth:0, paddingHorizontal:5, maxWidth:150,marginHorizontal:10, color:"white"}}
          arrowicon={<Text style={{paddingHorizontal:5, color:"white"}}>↓</Text>}
        />
      </View>
      <Spacer/>
    </>
  );
})
