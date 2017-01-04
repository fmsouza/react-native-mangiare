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
                    locked={this.props.locked || false}
                    initialPage={this.props.initialPage || 0}
                    scrollWithoutAnimation={this.props.scrollWithoutAnimation || false}
                    renderTabBar={() =>
                        <TabBar
                            style={this.props.style}
                            activeColor={this.props.activeColor}
                            inactiveColor={this.props.inactiveColor}
                        />
                    }
                >
                    {this.props.children}
                </ScrollableTabView>
            </View>
        );
    }
}
