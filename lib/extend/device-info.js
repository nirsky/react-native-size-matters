import { Dimensions, PixelRatio } from 'react-native';

class DeviceInfo {
    constructor() {
        const { width, height } = Dimensions.get('window');

        this.pixelDensity = PixelRatio.get();
        this.width = width;
        this.height = height;
        this.adjustedWidth = this.width * this.pixelDensity;
        this.adjustedHeight = this.height * this.pixelDensity;
        this.isPortrait = height >= width;
        this.isLandscape = width > height;

        this.determineDeviceType();
    }

    determineDeviceType() {
        if (this.pixelDensity < 2 && (this.adjustedWidth >= 1000 || this.adjustedHeight >= 1000)) {
            this.isTablet = true;
            this.isPhone = false;
        } else if (this.pixelDensity === 2 && (this.adjustedWidth >= 1824 || this.adjustedHeight >= 1824)) {
            this.isTablet = true;
            this.isPhone = false;
        } else {
            this.isTablet = false;
            this.isPhone = true;
        }

        this.isPhonePortrait = this.isPhone && this.isPortrait;
        this.isPhoneLandscape = this.isPhone && this.isLandscape;
        this.isTabletPortrait = this.isTablet && this.isPortrait;
        this.isTabletLandscape = this.isTablet && this.isLandscape;
    }
}

export default new DeviceInfo();
