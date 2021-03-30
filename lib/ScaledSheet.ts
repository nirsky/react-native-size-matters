import { StyleSheet, ViewStyle, TextStyle, ImageStyle, RegisteredStyle } from 'react-native';
import deepMap from './deep-map';

// Groups                     Size                   Func Factor
//                             1                      2    3
const validScaleSheetRegex = /^(\-?\d+(?:\.\d{1,3})?)@(mv?s(\d+(?:\.\d{1,2})?)?|s|vs)r?$/;
export interface StringifiedStyles {
    fontSize?: string | number;
    letterSpacing?: string | number;
    lineHeight?: string | number;
    textShadowRadius?: string | number;
    borderBottomLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    borderTopLeftRadius?: string | number;
    borderTopRightRadius?: string | number;
    borderBottomWidth?: string | number;
    borderTopWidth?: string | number;
    borderRightWidth?: string | number;
    borderLeftWidth?: string | number;
    borderRadius?: string | number;
    shadowRadius?: string | number;
    borderWidth?: string | number;
    aspectRatio?: string | number;
    rotation?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    translateX?: string | number;
    translateY?: string | number;
}

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle | StringifiedStyles };

const scaleByAnnotation = (
    scale: Function,
    verticalScale: Function,
    moderateScale: Function,
    moderateVerticalScale: Function
) => (value: string) => {
    if (!validScaleSheetRegex.test(value)) {
        return value;
    }

    const regexExecResult = validScaleSheetRegex.exec(value);

    const size = parseFloat(regexExecResult[1]);
    let scaleFunc = regexExecResult[2];
    const scaleFactor = regexExecResult[3]; // string or undefined

    if (scaleFactor) scaleFunc = scaleFunc.slice(0, -scaleFactor.length); // Remove the factor from it

    const shouldRound = value.endsWith('r');

    let result: number;

    switch (scaleFunc) {
        case 's':
            result = scale(size);
            break;
        case 'vs':
            result = verticalScale(size);
            break;
        case 'ms':
            result = moderateScale(size, scaleFactor);
            break;
        case 'mvs':
            result = moderateVerticalScale(size, scaleFactor);
            break;
    }

    return shouldRound ? Math.round(result) : result;
};

const scaledSheetCreator = (
    scale: Function,
    verticalScale: Function,
    moderateScale: Function,
    moderateVerticalScale: Function
) => {
    const scaleFunc = scaleByAnnotation(scale, verticalScale, moderateScale, moderateVerticalScale);
    const create = <T extends NamedStyles<T> | NamedStyles<any>>(stylesObject: T) =>
        StyleSheet.create(deepMap(stylesObject, scaleFunc)) as {
            [P in keyof T]: RegisteredStyle<T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>>;
        };
    return { create };
};

export default scaledSheetCreator;
