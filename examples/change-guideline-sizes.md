# Changing the Default Guideline Sizes

In the ever-changing mobile devices world, screen sizes change a lot.  
This lib uses 350dp x 680dp as guideline sizes, but if you (or your designer) prefer using different sizes it's possible.

To do so, first, you'd need to setup [babel-plugin-dotenv-import](https://github.com/tusbar/babel-plugin-dotenv-import).  
After setting it up and creating `.env` file, add the following env params to it:
```env
SIZE_MATTERS_BASE_WIDTH=<custom-width>
SIZE_MATTERS_BASE_HEIGHT=<custom-height>
```
Next and final step, you should change all your imports to `react-native-size-matters/extend`, for instance:
```javascript
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';
```
