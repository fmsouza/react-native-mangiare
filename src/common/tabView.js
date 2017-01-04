import React from 'react';
import { View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './tabBar';

export default class TabView extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollableTabView
                    tabBarPosition={this.props.position || 'bottom'}
                    initialPage={this.props.initialPage || 0}
                    renderTabBar={() => <TabBar />}
                >
                    {this.props.children}
                </ScrollableTabView>
            </View>
        );
    }
}
