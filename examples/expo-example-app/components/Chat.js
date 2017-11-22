import React from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import withScaledSheetSwitch from './behaviors/withScaledSheetSwitch';

const scaledSheet = ScaledSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    inputBox: {
        alignSelf: 'stretch',
        height: '45@ms',
        padding: '6@ms',
        flexDirection: 'row',
    },
    textInput: {
        paddingHorizontal: '10@ms0.3',
        flex: 1,
        borderRadius: '25@ms',
        backgroundColor: 'white',
        borderWidth: 0.25,
        borderColor: '#545454'
    },
    chatBox: {
        maxWidth: '270@s',
        margin: '5@s',
        borderRadius: '8@ms',
        padding: '10@ms'
    },
    chatText: {
        fontSize: '15@ms0.3'
    }
});

const regularSheet = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    inputBox: {
        alignSelf: 'stretch',
        height: 45,
        padding:6,
        flexDirection: 'row',
    },
    textInput: {
        paddingHorizontal: 10,
        flex: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        borderWidth: 0.25,
        borderColor: '#545454'
    },
    chatBox: {
        maxWidth: 270,
        margin: 5,
        borderRadius: 8,
        padding: 10
    },
    chatText: {
        fontSize: 15
    }
});

const data = [
    { text: 'Hey', me: 1},
    { text: 'what you doin?', me: 1},
    { text: 'Eating lunch right now 🍜. What about you?', me: 0},
    { text: 'nothing...', me: 1},
    { text: 'Wanna do something tonight? my girlfriend is working and I\'m bored.', me: 1},
    { text: 'Ummmm, I\'m only available after 9pm, sounds good?', me: 0},
    { text: 'Yeah, I\'ll watch some Netflix before 📺', me: 1},
    { text: 'ohhhh what are you watching??', me: 0},
    { text: 'Stranger Things, season 2!', me: 1},
    { text: 'Niceeee! 😍😍😍', me: 0},
    { text: 'I just saw the last episode yesterday', me: 0},
    { text: 'MIND = BLOWN', me: 0},
    { text: 'LOL no spoilers!!! I\'m only at episode 3', me: 1},
    { text: 'yeah yeah no worries!', me: 0},
    { text: 'so see ya later!', me: 0},
    { text: 'See ya!', me: 1},
    { text: '👋', me: 1},
];

const Chat = ({ scale }) => {
    const styles = scale ? scaledSheet : regularSheet;
    return <View style={styles.container}>
        <View style={{flex: 1, height: '100%', backgroundColor: '#DDD'}}>
            <ScrollView>
                {data.map((entry, i) => <View key={i} style={[styles.chatBox, {
                    alignSelf: entry.me ? 'flex-end' : 'flex-start',
                    backgroundColor: entry.me ? '#B6F6B3' : 'white'
                }]}>
                    <Text style={[styles.chatText, {alignSelf: entry.me ? 'flex-end' : 'flex-start'}]}>{entry.text}</Text>
                </View>)}
            </ScrollView>
        </View>
        <View style={styles.inputBox}>
            <TextInput style={styles.textInput} disabled={true} placeholder={'Type something here...'}/>
            <Button title={'Send'} onPress={() => null}/>
        </View>
    </View>
};

export default withScaledSheetSwitch(Chat);