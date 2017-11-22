import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import withScaledSheetSwitch from './behaviors/withScaledSheetSwitch';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '200@ms',
        height: '50@ms',
        borderColor: '#696969',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10@vs',
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: -1
        }
    },
    text: {
        fontSize: '15@ms0.3',
        fontWeight: 'bold'
    }
});

const Form = ({ navigation }) => <View style={styles.container}>
    <Text style={styles.text}>Form Page</Text>
</View>;

export default withScaledSheetSwitch(Form);