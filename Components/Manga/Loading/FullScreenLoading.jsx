import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { Dimensions } from "react-native";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
export const FullScreenLoading = () => {
  const { width, height } = Dimensions.get("window")
  return (
    <ShimmerPlaceHolder duration={1700}  location={[0,0.5,1]}  shimmerColors={['#202020','rgba(11,11,11,0.2)','rgba(0,0,0,0.35)']} height={height} width={width} style={{overflow: 'hidden', borderRadius:5}}/>
  );
};
