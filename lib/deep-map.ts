const deepMap = (obj: any, fn: Function): any => {
    const deepMapper = (val: any) => (isObject(val)) ? deepMap(val, fn) : fn(val);
    if (Array.isArray(obj)) {
        return obj.map(deepMapper);
    }
    if (isObject(obj)) {
        return mapObject(obj, deepMapper);
    }
    return obj;
};

const mapObject = (obj: any, fn: Function): any => Object.keys(obj).reduce(
    (res: any, key: string) => {
        res[key] = fn(obj[key]);
        return res;
    }, {});

const isObject = (myVar: any): boolean => myVar && typeof myVar === 'object';

export default deepMap;
