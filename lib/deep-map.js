const deepMap = (obj, fn) => {
    const deepMapper = val => (isObject(val)) ? deepMap(val, fn) : fn(val);
    if (Array.isArray(obj)) {
        return obj.map(deepMapper);
    }
    if (isObject(obj)) {
        return mapObject(obj, deepMapper);
    }
    return obj;
};

const mapObject = (obj, fn) => Object.keys(obj).reduce(
    (res, key) => {
        res[key] = fn(obj[key]);
        return res;
    }, {});

const isObject = myVar => myVar && typeof myVar === 'object';

export default deepMap;
