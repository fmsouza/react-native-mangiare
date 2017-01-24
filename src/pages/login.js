import React from 'react';
import { View, Text } from 'react-native';
import { Touchable } from '../common';

const Style = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    facebookButtonText: {
        color: '#3b5998',
        fontSize: 18
    }
};

export default class Login extends React.Component {

    onPressFacebookButton() {
        this.props.navigator.resetTo({ id: 'tabs' });
    }

    render() {
        return (
            <View style={Style.container}>
                <Touchable onPress={this.onPressFacebookButton.bind(this)}>
                    <Text style={Style.facebookButtonText}>Login with Facebook</Text>
                </Touchable>
            </View>
        );
    }
}
