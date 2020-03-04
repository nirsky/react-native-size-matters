describe('DeviceInfo', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    test('isTablet check works', () => {
        jest.mock('react-native', () => ({
            Dimensions: {
                get: () => ({width: 700, height: 1020})
            },
            PixelRatio: {
                get: () => 1
            }
        }));

        const DeviceInfo = require('../lib/extend/device-info').default;
        expect(DeviceInfo.isTablet).toBeTruthy();
    });

    test('isPhone check works', () => {
        jest.mock('react-native', () => ({
            Dimensions: {
                get: () => ({width: 700, height: 1020})
            },
            PixelRatio: {
                get: () => 3
            }
        }));

        const DeviceInfo = require('../lib/extend/device-info').default;
        expect(DeviceInfo.isPhone).toBeTruthy();
    });
})
