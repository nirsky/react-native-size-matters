jest.mock('react-native');
import { scale, verticalScale, moderateScale } from '..';

describe('scaling-utils', () => {
    test('scale returns the expected result based on mocked Dimensions', () => {
        expect(scale(2.5)).toBe(5);
        expect(scale(100)).toBe(200);
        expect(scale(200)).toBe(400);
    });

    test('verticalScale returns the expected result based on mocked Dimensions', () => {
        expect(verticalScale(5)).toBe(7.5);
        expect(verticalScale(100)).toBe(150);
        expect(verticalScale(200)).toBe(300);
    });

    test('moderateScale returns the expected result based on mocked Dimensions', () => {
        expect(moderateScale(100)).toBe(150);
        expect(moderateScale(100, 0.1)).toBe(110);
        expect(moderateScale(100, 0.3)).toBe(130);
        expect(moderateScale(100, 0.6)).toBe(160);
        expect(moderateScale(100, 0.9)).toBe(190);
        expect(moderateScale(100, 2)).toBe(300);
    });
})