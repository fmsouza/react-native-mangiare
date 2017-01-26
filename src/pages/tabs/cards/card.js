import React from 'react';
import { Text, Image } from 'react-native';
import { CardView } from '../../../common';

const Style = {
    container: {
        width: 250,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 5
    },
    avatar: {
        width: 250,
        height: 250
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 7
    },
    description: {
        fontSize: 14,
        marginHorizontal: 7
    }
};

export default props => (
    <CardView style={Style.container}>
        <Image
          style={Style.avatar}
          source={{ uri: props.avatar }}
        />
        <Text style={Style.title}>{props.name}</Text>
        <Text style={Style.description}>Wants to {props.action} {props.plate}.</Text>
    </CardView>
);
