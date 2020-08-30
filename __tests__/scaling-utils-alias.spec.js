jest.mock('react-native');
import { s, vs, ms, mvs } from '..';

describe('scaling-utils', () => {
    test('scale returns the expected result based on mocked Dimensions', () => {
        expect(s(2.5)).toBe(5);
        expect(s(100)).toBe(200);
        expect(s(200)).toBe(400);
    });

    test('verticalScale returns the expected result based on mocked Dimensions', () => {
        expect(vs(5)).toBe(7.5);
        expect(vs(100)).toBe(150);
        expect(vs(200)).toBe(300);
    });

    test('moderateScale returns the expected result based on mocked Dimensions', () => {
        expect(ms(100)).toBe(150);
        expect(ms(100, 0.1)).toBe(110);
        expect(ms(100, 0.3)).toBe(130);
        expect(ms(100, 0.6)).toBe(160);
        expect(ms(100, 0.9)).toBe(190);
        expect(ms(100, 2)).toBe(300);
    });

    test('moderateVerticalScale returns the expected result based on mocked Dimensions', () => {
        expect(mvs(100)).toBe(125);
        expect(mvs(100, 0.1)).toBe(105);
        expect(mvs(100, 0.3)).toBe(115);
        expect(mvs(100, 0.6)).toBe(130);
        expect(mvs(100, 0.9)).toBe(145);
        expect(mvs(100, 2)).toBe(200);
    });
});