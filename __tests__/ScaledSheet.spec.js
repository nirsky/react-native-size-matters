jest.mock('react-native');
import { ScaledSheet, scale, verticalScale, moderateScale, moderateVerticalScale } from '..';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

describe('ScaledSheet', () => {
    test('Scale works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@s` };
        expect(ScaledSheet.create(input).test).toBe(scale(number));
    });

    test('verticalScale works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@vs` };
        expect(ScaledSheet.create(input).test).toBe(verticalScale(number));
    });

    test('moderateScale with default factor works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@ms` };
        expect(ScaledSheet.create(input).test).toBe(moderateScale(number));
    });

    test('moderateVerticalScale with default factor works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@mvs` };
        expect(ScaledSheet.create(input).test).toBe(moderateVerticalScale(number));
    });

    test('moderateScale with custom factor works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@ms0.7` };
        expect(ScaledSheet.create(input).test).toBe(moderateScale(number, 0.7));
    });

    test('moderateVerticalScale with custom factor works', () => {
        const number = getRandomInt();
        const input = { test: `${number}@mvs0.7` };
        expect(ScaledSheet.create(input).test).toBe(moderateVerticalScale(number, 0.7));
    });

    test('Scale works with a negative value', () => {
        const number = getRandomInt(-100, -1);
        const input = { test: `${number}@s` };
        expect(ScaledSheet.create(input).test).toBe(scale(number));
    });

    test('moderateScale works with a negative value', () => {
        const number = getRandomInt(-100, -1);
        const input = { test: `${number}@ms0.3` };
        expect(ScaledSheet.create(input).test).toBe(moderateScale(number, 0.3));
    });

    test('moderateVerticalScale works with a negative value', () => {
        const number = getRandomInt(-100, -1);
        const input = { test: `${number}@mvs0.3` };
        expect(ScaledSheet.create(input).test).toBe(moderateVerticalScale(number, 0.3));
    });

    test('Scale works on a deeply nested object', () => {
        const number = getRandomInt();
        const input = { test: { test: { test: `${number}@s` } } };
        expect(ScaledSheet.create(input).test.test.test).toBe(scale(number));
    });

    test('No special annotation should leave the number intact', () => {
        const number = getRandomInt();
        const input = { test: number };
        expect(ScaledSheet.create(input).test).toBe(number);
    });

    test('ScaledSheet should map a complete StyleSheet with special annotations', () => {
        const input = {
            container: {
                width: '30@s',
                height: '50@vs',
                margin: {
                    width: 12,
                    height: '12@s',
                    paddingTop: '6.3@mvs',
                    paddingBottom: -1
                }
            },
            row: {
                paddingLeft: '10@ms0.3',
                paddingBottom: '10@mvs0.4',
                height: '34@ms',
                marginRight: '0.5@ms0.9',
                marginLeft: '-0.5@ms0.9',
                marginBottom: '0.532@ms0.9',
                marginTop: '-10@s',
            },
            round: {
                top: '11.3@sr',
                bottom: '22.75@vsr',
                left: '35.1@msr',
                right: '-20.19@ms0.3r',
                height: '-14.13@mvs0.4r'
            }
        };

        const expectedOutput = {
            container: {
                width: scale(30),
                height: verticalScale(50),
                margin: {
                    width: 12,
                    height: scale(12),
                    paddingTop: moderateVerticalScale(6.3),
                    paddingBottom: -1
                }
            },
            row: {
                paddingLeft: moderateScale(10, 0.3),
                paddingBottom: moderateVerticalScale(10, 0.4),
                height: moderateScale(34),
                marginRight: moderateScale(0.5, 0.9),
                marginLeft: moderateScale(-0.5, 0.9),
                marginBottom: moderateScale(0.532, 0.9),
                marginTop: scale(-10),
            },
            round: {
                top: Math.round(scale(11.3)),
                bottom: Math.round(verticalScale(22.75)),
                left: Math.round(moderateScale(35.1)),
                right: Math.round(moderateScale(-20.19, 0.3)),
                height: Math.round(moderateVerticalScale(-14.13, 0.4))
            }
        };

        expect(JSON.stringify(ScaledSheet.create(input))).toBe(JSON.stringify(expectedOutput));
    });
});
