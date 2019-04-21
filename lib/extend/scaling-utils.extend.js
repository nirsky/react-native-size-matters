import { Dimensions } from 'react-native';
import { SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT } from 'react-native-dotenv';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 350;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 680;

const scale = size => shortDimension / guidelineBaseWidth * size;
const verticalScale = size => longDimension / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};