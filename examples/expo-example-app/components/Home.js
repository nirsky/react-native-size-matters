import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import withScaledSheetSwitch from './behaviors/withScaledSheetSwitch';

const scaledStyles = ScaledSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '250@ms',
        height: '80@ms',
        borderColor: '#696969',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '25@vs',
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
        fontSize: '18@ms0.3',
        fontWeight: 'bold'
    }
});

const regularStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 250,
        height: 80,
        borderColor: '#696969',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
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
        fontSize: 18,
        fontWeight: 'bold'
    }
});

const Home = ({ navigation, scale }) => {
    const styles = scale ? scaledStyles : regularStyles;
    return <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feed')}>
            <Text style={styles.text}>Feed Example</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.text}>Chat Example</Text>
        </TouchableOpacity>
    </View>;
};

export default withScaledSheetSwitch(Home);