import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { Dimensions } from "react-native";
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
export const ShimmerLoadingEachAnime = () => {
  const width = Dimensions.get("window").width
  return (
    <ShimmerPlaceHolder duration={1700}  location={[0,0.5,1]}  shimmerColors={['#202020','rgba(11,11,11,0.2)','rgba(0,0,0,0.35)']} height={width * 0.7} width={width * 0.5} style={{overflow: 'hidden', borderRadius:5}}/>
  );
};
