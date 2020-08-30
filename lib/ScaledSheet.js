import { StyleSheet } from 'react-native';
import deepMap from './deep-map';

// Groups                     Size                   Func Factor
//                             1                      2    3
const validScaleSheetRegex = /^(\-?\d+(?:\.\d{1,3})?)@(mv?s(\d+(?:\.\d{1,2})?)?|s|vs)r?$/;

const scaleByAnnotation = (scale, verticalScale, moderateScale, moderateVerticalScale) => (value) => {
    if (!validScaleSheetRegex.test(value)) {
        return value;
    }

    const regexExecResult = validScaleSheetRegex.exec(value);

    const size = parseFloat(regexExecResult[1]);
    let scaleFunc = regexExecResult[2];
    const scaleFactor = regexExecResult[3]; // string or undefined

    if (scaleFactor)
        scaleFunc = scaleFunc.slice(0, - scaleFactor.length); // Remove the factor from it

    const shouldRound = value.endsWith('r');

    let result;

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

const scaledSheetCreator = (scale, verticalScale, moderateScale, moderateVerticalScale) => {
    const scaleFunc = scaleByAnnotation(scale, verticalScale, moderateScale, moderateVerticalScale);
    return {
        create: styleSheet => StyleSheet.create(deepMap(styleSheet, scaleFunc))
    };
};

export default scaledSheetCreator;