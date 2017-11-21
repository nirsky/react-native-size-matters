import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { loremIpsum } from './contants';
const { width, height } = Dimensions.get('window');

const ScalingExample = () =>
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Awesome Blog Post Page</Text>
            <Text style={styles.text}>{loremIpsum}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: moderateScale(300),
        height: verticalScale(450),
        padding: scale(10),
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2
    },
    title: {
        fontSize: moderateScale(20, 0.4),
        fontWeight: 'bold',
        marginBottom: scale(10),
        color: 'black'
    },
    text: {
        fontSize: moderateScale(14),
        color: 'black'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: moderateScale(150, 0.3),
        height: moderateScale(45, 0.3),
        borderRadius: 100,
        marginBottom: moderateScale(10, 0.6),
        backgroundColor: '#41B6E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        color: 'white'
    }
});

export default ScalingExample;