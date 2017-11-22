# react-native-size-matters
A React-Native utility belt for scaling the size your apps UI across different sized devices.

## Installation
```js
npm install --save react-native-size-matters
//or:
yarn add react-native-size-matters
```

## Motivation
When developing with react-native, you need to manually adjust your app to look great on variety of different screen sizes. That's a tedious job.  
react-native-size-matters provides some simple tooling to make your scaling a whole lot easier.  
The idea is to develop once on a standard ~5" screen mobile device and then simply apply the provided utils.  
📖 You can read more about what led to this library on my blog post, that can be found in [this repo](./examples/BlogPost) or at [Soluto Engineering Blog](https://blog.solutotlv.com/size-matters/).

## Api
### Scaling Functions
```js
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Component = props =>
    <View style={{
        width: scale(30),
        height: verticalScale(50),
        padding: moderateScale(5)
    }}/>;
```


* `scale(size: number)`  
Will return linear scaled result of the provided size, based on your device's screen width.
* `verticalScale(size: number)`  
Will return linear scaled result of the provided size, based on your device's screen height.

* `moderateScale(size: number, factor?: number)`  
Sometimes you don't want to scale everything in a linear manner, that's where moderate scale comes in.  
The cool thing about it is that you can control the resize factor (default is 0.5).  
If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:  
➡️ scale(10) = 20  
➡️ moderateScale(10) = 15  
➡️ moderateScale(10, 0.1) = 11  

### ScaledSheet
```js
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaleSheet.create(stylesObject)
```

ScaleSheet will take the same stylesObject a regular StyleSheet will take, plus a special (optional) annotation that will automatically apply the scale functions for you:
* `<size>@s` - will apply `scale` function on `size`.
* `<size>@vs` - will apply `verticalScale` function on `size`.
* `<size>@ms` - will apply `moderateScale` function with resize factor of 0.5 on `size`.
* `<size>@ms<factor>` - will apply `moderateScale` function with resize factor of `factor` on size.

Example:
```js
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        width: '100@s',
        height: '200@vs',
        margin: 5
    },
    row: {
        padding: '10@ms0.3',
        height: '50@ms'
    }
});
```
is equivalent to:
```js
import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        width: scale(100),
        height: verticalScale(200),
        margin: 5
    },
    row: {
        padding: moderateScale(10, 0.3),
        height: moderateScale(50)
    }
});
```

## Examples
