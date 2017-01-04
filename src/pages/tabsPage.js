import React from 'react';
import { View, Platform, Text } from 'react-native';
import { TabView, Header } from '../common';
import { FirstTab, SecondTab, ThirdTab } from './tabs';

export default class TabsPage extends React.Component {
    state = { title: 'First' };

    onChangeTab(tab) {
        this.setState({ title: tab.ref.props.title });
    }

    render() {
        const { navigator } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Header.Title>
                        <Text>{this.state.title}</Text>
                    </Header.Title>
                </Header>
                <TabView
                    ref={ref => { this.tabView = ref; }}
                    onChangeTab={this.onChangeTab.bind(this)}
                    scrollWithoutAnimation={Platform.OS === 'ios'}
                    initialPage={0}
                >
                    <FirstTab tabLabel="baseball" title="First" navigator={navigator} />
                    <SecondTab tabLabel="basketball" title="Second" navigator={navigator} />
                    <ThirdTab tabLabel="beer" title="Third" navigator={navigator} />
                </TabView>
            </View>
        );
    }
}
