import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
let guidelineBaseWidth = 350;
let guidelineBaseHeight = 680;

export const setBaseWidthAndHeight = (baseWidth, baseHeight) => {
    guidelineBaseWidth = baseWidth;
    guidelineBaseHeight = baseHeight;
}
export const scale = size => shortDimension / guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;