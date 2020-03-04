const reactNative = {
    Dimensions: {
        get: () => ({width: 700, height: 1020})
    },
    PixelRatio: {
        get: () => 2
    },
    StyleSheet: {
        create: x => x
    }
};

module.exports = reactNative;
