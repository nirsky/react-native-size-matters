const scale = (val) => val + 1;
const verticalScale = (val) => val + 2;
const moderateScale = (val, factor = 0.5) => val + 3 + factor;

const validScaleSheetRegex = /^(\d+(\.\d{1,2})?)@(ms(\d+(\.\d{1,2})?)?|s|vs)$/;
const scaleRegex = /^(\d+(\.\d{1,2})?)@s$/;
const verticalScaleRegex = /^(\d+(\.\d{1,2})?)@vs$/;
const moderateScaleRegex = /^(\d+(\.\d{1,2})?)@ms(\d+(\.\d{1,2})?)?$/;


const scaleByAnnotation = (value) => {
    if (!validScaleSheetRegex.test(value)) {
        return value;
    }
    const size = parseFloat(value.split('@')[0]);

    if (scaleRegex.test(value)) {
        return scale(size);
    }

    if (verticalScaleRegex.test(value)) {
        return verticalScale(size);
    }

    if (moderateScaleRegex.test(value)) {
        const scaleFactor = value.split('ms')[1];
        if (scaleFactor) {
            return moderateScale(size, parseFloat(scaleFactor));
        }
        return moderateScale(size);
    }

    return value;
};

const deepMap = require('./deepMap');

console.log('got:\n', deepMap({
    container: {
        width: '30@sg',
        height: '50@vs',
        margin: {
            width: 12,
            height: '12@s'
        }
    },
    row: {
        padding: '10@ms0.3',
        height: '34@vs'
    }
}, scaleByAnnotation));