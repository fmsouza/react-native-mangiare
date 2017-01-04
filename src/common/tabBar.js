import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from './index';
import Theme from '../theme';

const Styles = {
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: Theme.toolbarDefaultBg,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
};

const actvColor = '#000000';
const inctvColor = '#cccccc';

export default class TabBar extends React.Component {

    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    };

    renderTabs() {
        const { goToPage, activeTab, activeColor, inactiveColor, tabs } = this.props;
        return tabs.map((tab, i) => (
            <TouchableOpacity
                key={tab}
                activeOpacity={1}
                style={Styles.tab}
                onPress={() => goToPage(i)}
            >
                <Icon
                size={30}
                name={tab}
                color={activeTab === i ? activeColor || actvColor : inactiveColor || inctvColor}
                />
            </TouchableOpacity>
        ));
    }

    render() {
        return (
            <View style={{ ...Styles.tabs, ...this.props.style }}>
                {this.renderTabs()}
            </View>
        );
    }
}
