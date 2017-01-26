import React from 'react';
import { View, Text, ScrollView, Image, Switch } from 'react-native';
import { CardView, Icon, Touchable } from '../../../common';

const Style = {
    container: {
        paddingVertical: 10
    },
    headerCard: {
        padding: 10,
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userAvatar: {
        width: 48,
        height: 48,
        borderRadius: 25
    },
    textCenter: {
        alignItems: 'center'
    },
    subtitle: {
        color: '#999',
        fontSize: 14,
        marginVertical: 15,
        marginHorizontal: 15
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
    },
    listItemSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },
    listWithMargin: {
        marginHorizontal: 15
    },
    listItemIcon: {
        width: 40
    }
};

export default class Settings extends React.Component {

    state = {
        user: {
            name: 'Renato Gonçalves',
            email: 'renagon@gmail.com',
            avatar: 'https://placehold.it/50x50'
        },
        toggleSounds: false,
        toggleNotifications: false
    };

    onPressLogOut() {
        console.log('Pressed log out');
    }

    render() {
        return (
            <ScrollView style={Style.container}>
                <CardView style={Style.headerCard}>
                    <Image style={Style.userAvatar} source={{ uri: this.state.user.avatar }} />
                    <View style={Style.textCenter}>
                        <Text>{this.state.user.name}</Text>
                        <Text>{this.state.user.email}</Text>
                    </View>
                    <Touchable onPress={this.onPressLogOut.bind(this)}>
                        <Icon name="log-out" />
                    </Touchable>
                </CardView>
                <Text style={Style.subtitle}>Usuário</Text>
                <View style={{ ...Style.listItem, ...Style.borderBottom, ...Style.listWithMargin }}>
                    <Icon name="person" style={Style.listItemIcon} />
                    <Text>Perfil</Text>
                </View>
                <View style={{ ...Style.listItem, ...Style.borderBottom, ...Style.listWithMargin }}>
                    <Icon name="card" style={Style.listItemIcon} />
                    <Text>Pagamento</Text>
                </View>
                <Text style={Style.subtitle}>Sistema</Text>
                <View style={{ ...Style.listItemSwitch, ...Style.borderBottom, ...Style.listWithMargin }}>
                    <View style={Style.listItem}>
                        <Icon name="megaphone" style={Style.listItemIcon} />
                        <Text>Sons</Text>
                    </View>
                    <Switch
                        onValueChange={value => this.setState({ toggleSounds: value })}
                        value={this.state.toggleSounds}
                    />
                </View>
                <View style={{ ...Style.listItemSwitch, ...Style.borderBottom, ...Style.listWithMargin }}>
                    <View style={Style.listItem}>
                        <Icon name="notifications" style={Style.listItemIcon} />
                        <Text>Receber notificações</Text>
                    </View>
                    <Switch
                        onValueChange={value => this.setState({ toggleNotifications: value })}
                        value={this.state.toggleNotifications}
                    />
                </View>
                <View style={{ ...Style.listItem, ...Style.borderBottom, ...Style.listWithMargin }}>
                    <Icon name="help-circle" style={Style.listItemIcon} />
                    <Text>Sobre o app</Text>
                </View>
                <View style={{ ...Style.listItem, ...Style.borderBottom, ...Style.listWithMargin }}>
                    <Icon name="document" style={Style.listItemIcon} />
                    <Text>Termos de uso</Text>
                </View>
            </ScrollView>
        );
    }
}
