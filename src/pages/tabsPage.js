import React from 'react';
import { View, Platform, Text } from 'react-native';
import { TabView, Header } from '../common';
import { Cards, SecondTab, Settings } from './tabs';

export default class TabsPage extends React.Component {
    state = { title: '' };

    onChangeTab(tab) {
        this.setState({ title: tab.ref.props.title });
    }

    render() {
        const { navigator } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header noShadow>
                    <Header.Title>
                        <Text>{this.state.title}</Text>
                    </Header.Title>
                </Header>
                <TabView
                    ref={ref => { this.tabView = ref; }}
                    onChangeTab={this.onChangeTab.bind(this)}
                    scrollWithoutAnimation={Platform.OS === 'ios'}
                    initialPage={0}
                    locked
                >
                    <Cards tabLabel="people" navigator={navigator} />
                    <SecondTab tabLabel="chatbubbles" title="Second" navigator={navigator} />
                    <Settings tabLabel="settings" title="Settings" navigator={navigator} />
                </TabView>
            </View>
        );
    }
}
