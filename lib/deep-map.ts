const deepMap = (obj: any, fn: Function) => {
    const deepMapper = (val: any) => (isObject(val)) ? deepMap(val, fn) : fn(val);
    if (Array.isArray(obj)) {
        return obj.map(deepMapper);
    }
    if (isObject(obj)) {
        return mapObject(obj, deepMapper);
    }
    return obj;
};

const mapObject = (obj: any, fn: Function) => Object.keys(obj).reduce(
    (res, key) => {
        res[key] = fn(obj[key]);
        return res;
    }, {});

const isObject = (myVar: any) => myVar && typeof myVar === 'object';

export default deepMap;
