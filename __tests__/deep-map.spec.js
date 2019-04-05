import deepMap from '../lib/deep-map';

const add3 = x => x + 3;

describe('deep-map', () => {
    test('returns value if it\'s not an object or array', () => {
        expect(deepMap(5, add3)).toBe(5);
        expect(deepMap(true, add3)).toBe(true);
        expect(deepMap(null, add3)).toBe(null);
        expect(deepMap(undefined, add3)).toBe(undefined);
        expect(deepMap('string', add3)).toBe('string');
    });

    test('maps non-nested object', () => {
        expect(JSON.stringify(deepMap({ a: 5 }, add3))).toBe(JSON.stringify({ a: 8 }));
    });

    test('maps nested object', () => {
        const input = { a: { b: { d: 1, e: 2 }, c: 3, f: { g: 4 } } };
        const expectedOutput = { a: { b: { d: 1 + 3, e: 2 + 3 }, c: 3 + 3, f: { g: 4 + 3 } } };

        expect(JSON.stringify(deepMap(input, add3))).toBe(JSON.stringify(expectedOutput));
    });

    test('maps array', () => {
        const input = [1, 2, 3, 4];
        const expectedOutput = [4, 5, 6, 7];

        expect(JSON.stringify(deepMap(input, add3))).toBe(JSON.stringify(expectedOutput));
    });

    test('maps object within array', () => {
        const input = [1, 2, 3, { a: 10 }];
        const expectedOutput = [4, 5, 6, { a: 13 }];

        expect(JSON.stringify(deepMap(input, add3))).toBe(JSON.stringify(expectedOutput));
    });

    test('maps array within object', () => {
        const input = { a: [1, 2, 3] };
        const expectedOutput = { a: [4, 5, 6] };

        expect(JSON.stringify(deepMap(input, add3))).toBe(JSON.stringify(expectedOutput));
    });
});