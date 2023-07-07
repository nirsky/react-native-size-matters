import { FlexStyle, ViewStyle, TextStyle, ImageStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

declare module "react-native-size-matters" {

    interface StringifiedStyles extends FlexStyle{
        fontSize?: string | number;
        letterSpacing?: string | number;
        lineHeight?: string | number;
        textShadowRadius?: string | number;
        borderBottomLeftRadius?: string | number;
        borderBottomRightRadius?: string | number;
        borderTopLeftRadius?: string | number;
        borderTopRightRadius?: string | number;
        borderRadius?: string | number;
        shadowRadius?: string | number;
        aspectRatio?: string | number;
        rotation?: string | number;
        scaleX?: string | number;
        scaleY?: string | number;
        translateX?: string | number;
        translateY?: string | number;
        backgroundColor?: string;
    }

    export function scale(size: number): number;
    export function verticalScale(size: number): number;
    export function moderateScale(size: number, factor?: number): number;
    export function moderateVerticalScale(size: number, factor?: number): number;
    export function s(size: number): number;
    export function vs(size: number): number;
    export function ms(size: number, factor?: number): number;
    export function mvs(size: number, factor?: number): number;


    export namespace ScaledSheet {
        type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle | StringifiedStyles};

        /**
         * Creates a StyleSheet style reference from the given object.
         */
        export function create<T extends NamedStyles<T> | NamedStyles<any>>(
            styles: T | NamedStyles<T>,
        ): T;
    }
}
