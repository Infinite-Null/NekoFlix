import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
export const ImageLoading = ({height, width}) => {
  return (
    <ShimmerPlaceHolder duration={1700}  location={[0,0.5,1]}  shimmerColors={['#202020','rgba(11,11,11,0.2)','rgba(0,0,0,0.35)']} height={height} width={width} style={{overflow: 'hidden', borderRadius:5, marginBottom:10}}/>
  );
};
