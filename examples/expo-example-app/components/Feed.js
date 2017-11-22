import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import withScaledSheetSwitch from './behaviors/withScaledSheetSwitch';

const scaledSheet = ScaledSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    feedItem: {
        alignSelf: 'stretch',
        borderColor: '#696969',
        backgroundColor: 'white',
        marginVertical: 5,
        padding: '10@ms'
    },
    text: {
        fontSize: '14@ms0.3',
        marginTop: 5
    },
    thumbnail: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60@ms',
        height: '60@ms',
        borderRadius: '30@ms'
    },
    initials: {
        fontSize: '20@ms0.3',
        fontWeight: 'bold'
    },
    name: {
        fontSize: '18@ms0.3',
        marginLeft: '10@ms'
    }
});

const regularSheet = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    feedItem: {
        alignSelf: 'stretch',
        borderColor: '#696969',
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 10
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    thumbnail: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30
    },
    initials: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 18,
        marginLeft: 10
    }
});

const data = [
    {
        name: 'Jack Sparrow',
        thumbnail: 'JS',
        thumbnailColor: '#2b78c4',
        text: 'The only rules that really matter are these: what a man can do and what a man can\'t do. For instance, you can accept that your father was a pirate and a good man or you can\'t. But pirate is in your blood, boy, so you\'ll have to square with that some day. And me, for example, I can let you drown, but I can\'t bring this ship into Tortuga all by me onesies, savvy? So, can you sail under the command of a pirate, or can you not? '
    },
    {
        name: 'Marilyn Monroe',
        thumbnail: 'MM',
        thumbnailColor: '#c42fb7',
        text: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {
        name: 'J.K. Rowling',
        thumbnail: 'JK',
        thumbnailColor: '#efe430',
        text: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.'
    },
    {
        name: 'Rob Siltanen',
        thumbnail: 'RS',
        thumbnailColor: '#06c41f',
        text: 'Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.'
    },
    {
        name: 'Mark Twain',
        thumbnail: 'MT',
        thumbnailColor: '#acb8c4',
        text: 'It’s easy to quit smoking. I’ve done it hundreds of times.'
    },
    {
        name: 'Liam Neeson',
        thumbnail: 'LN',
        thumbnailColor: '#c40928',
        text: 'I don\'t know who you are. I don\'t know what you want. If you are looking for ransom I can tell you I don\'t have money, but what I do have are a very particular set of skills. Skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now that\'ll be the end of it. I will not look for you, I will not pursue you, but if you don\'t, I will look for you, I will find you and I will kill you.'
    },
];

const Feed = ({ scale }) => {
    const styles = scale ? scaledSheet : regularSheet;
    return <ScrollView style={styles.container}>
    {(data.concat(data).concat(data)).map((entry, i) => <View key={i} style={styles.feedItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.thumbnail, {backgroundColor: entry.thumbnailColor}]}>
                <Text style={styles.initials}>{entry.thumbnail}</Text>
            </View>
            <Text style={styles.name}>{entry.name}</Text>
        </View>
        <Text style={styles.text}>{entry.text}</Text>
    </View>)}
</ScrollView>;
};

export default withScaledSheetSwitch(Feed);