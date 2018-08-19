jest.mock('react-native');
import { scale, verticalScale, moderateScale } from '../lib/scalingUtils';
import ScaledSheet from '../lib/ScaledSheet';

const input = {
    container: {
        width: '30@s',
        height: '50@vs',
        margin: {
            width: 12,
            height: '12@s',
            paddingBottom: -1
        }
    },
    row: {
        padding: '10@ms0.3',
        height: '34@ms',
        marginRight: '0.5@ms0.9',
        marginLeft: '-0.5@ms0.9',
        marginTop: '-10@s',
    }
};

const expectedOutput = {
    container: {
        width: scale(30),
        height: verticalScale(50),
        margin: {
            width: 12,
            height: scale(12),
            paddingBottom: -1
        }
    },
    row: {
        padding: moderateScale(10, 0.3),
        height: moderateScale(34),
        marginRight: moderateScale(0.5, 0.9),
        marginLeft: moderateScale(-0.5, 0.9),
        marginTop: scale(-10),
    }
};

test('ScaledSheet should map the special annotations as expected', () => {
    expect(JSON.stringify(ScaledSheet.create(input))).toBe(JSON.stringify(expectedOutput));
});