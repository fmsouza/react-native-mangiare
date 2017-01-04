import React from 'react';
import { View, Text } from 'react-native';
import { CardView } from '../../common';

const Style = {
    card: {
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
};

export default props => (
    <View style={{ flex: 1 }}>
        <View style={Style.container}>
            <CardView style={Style.card}>
                <Text style={Style.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={Style.instructions}>
                    This is the third tab.
                </Text>
            </CardView>
        </View>
    </View>
);
