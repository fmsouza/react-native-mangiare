import React from 'react';
import { View } from 'react-native';
import { Header, Icon } from '../common';

export default class Chat extends React.Component {

    onPressLeftButton() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Header.LeftButton onPress={this.onPressLeftButton.bind(this)}>
                        <Icon name="arrow-back" />
                    </Header.LeftButton>
                    <Header.Title>{this.props.args.name}</Header.Title>
                </Header>
            </View>
        );
    }
}
