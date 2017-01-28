import React from 'react';
import { Image, Text, View } from 'react-native';

const Style = {
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        paddingVertical: 8,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,
        color: '#000'
    },
    lastMessage: {
        fontSize: 12,
        color: '#666'
    },
    avatar: {
        alignSelf: 'center',
        borderRadius: 25,
        width: 40,
        height: 40,
        marginHorizontal: 10
    },
    badge: {
      marginRight: 20,
      backgroundColor: '#f00',
      paddingHorizontal: 6,
      borderRadius: 4
    },
    badgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row'
    }
};

function renderBadge(count) {
    if (count > 0) {
        return (
            <View style={Style.badge}>
                <Text style={Style.badgeText}>{count}</Text>
            </View>);
    }
}

export default props => (
    <View style={{ ...Style.container, ...Style.row }}>
        <View style={Style.row}>
            <Image style={Style.avatar} source={{ uri: props.avatar }} />
            <View>
                <Text style={Style.title}>{props.name}</Text>
                <Text style={Style.lastMessage}>{props.lastMessage}</Text>
            </View>
        </View>
        {renderBadge(props.unread)}
    </View>
);
