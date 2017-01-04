import React from 'react';
import { View, Platform } from 'react-native';
import { TabView } from '../common';
import { FirstTab, SecondTab, ThirdTab } from './tabs';

export default class TabsPage extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabView scrollWithoutAnimation={Platform.OS === 'ios'}>
                    <FirstTab tabLabel="baseball" navigator={this.props.navigator} />
                    <SecondTab tabLabel="basketball" navigator={this.props.navigator} />
                    <ThirdTab tabLabel="beer" navigator={this.props.navigator} />
                </TabView>
            </View>
        );
    }
}