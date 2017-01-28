import React from 'react';
import { ScrollView } from 'react-native';
import { Touchable } from '../../../common';
import ChatListItem from './chatListItem';

const Style = {
    container: {
        backgroundColor: '#ffffff'
    }
};

const chats = [
    { name: 'Francielle Hemsworth', avatar: 'http://lorempixel.com/300/200/people/1', lastMessage: 'Yeah, it would be awesome!', unread: 0 },
    { name: 'Mirella Presley', avatar: 'http://lorempixel.com/300/200/people/2', lastMessage: 'Nah, I don\'t think so...', unread: 2 },
    { name: 'Jumes Sulley', avatar: 'http://lorempixel.com/300/200/people/3', lastMessage: 'Meet you there', unread: 1 },
    { name: 'Carl Livingson', avatar: 'http://lorempixel.com/300/200/people/4', lastMessage: 'Hello!', unread: 1 },
    { name: 'Pharell Wage', avatar: 'http://lorempixel.com/300/200/people/5', lastMessage: '8 o\'clock?', unread: 0 }
];

export default class Chats extends React.Component {

    state = { chats };

    onPressListItem(item) {
        this.props.navigator.push({ id: 'chat', args: item });
    }

    renderChats() {
        return this.state.chats.map(chat => (
            <Touchable key={chat.name} onPress={() => this.onPressListItem(chat)}>
                <ChatListItem {...chat} />
            </Touchable>
        ));
    }

    render() {
        return (
            <ScrollView
                style={Style.container}
            >
                {this.renderChats()}
            </ScrollView>

        );
    }
}
