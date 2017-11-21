# react-native-size-matters
A React-Native utility belt for scaling your app across different sized devices

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


* `scale(size: number)` - will return linear scaled result of the provided size, based on your device's screen width.
* `verticalScale(size: number)` - will return linear scaled result of the provided size, based on your device's screen height.
* `moderateScale(size: number, factor?: number)` - sometimes you don't want to scale everything in a linear manner, that's where moderate scale comes in.
The cool thing about it is that you can control the resize factor (default is 0.5).
If normal scale will increase your size by +2X, moderateScale will only increase it by +X.
For example:
* scale(10) = 20
* moderateScale(10) = 15
* moderateScale(10, 0.1) = 11

### ScaledSheet


## Examples