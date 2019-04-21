import { Dimensions } from 'react-native';
import env from 'react-native-dotenv';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = env && env.SIZE_MATTERS_BASE_WIDTH ? env.SIZE_MATTERS_BASE_WIDTH : 350;
const guidelineBaseHeight = env && env.SIZE_MATTERS_BASE_HEIGHT ? env.SIZE_MATTERS_BASE_HEIGHT : 680;

const scale = size => shortDimension / guidelineBaseWidth * size;
const verticalScale = size => longDimension / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};