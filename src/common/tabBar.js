import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from './index';


const Styles = {
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 44,
    flexDirection: 'row'
  },
};

export default class TabBar extends React.Component {

    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    };

    componentDidMount() {
        this.listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
    }

    setAnimationValue({ value }) {
        this.tabIcons.forEach((icon, i) => {
            const progress = Math.min(1, Math.abs(value - i));
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                }
            });
        });
    }

    tabIcons = [];

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 59 + (204 - 59) * progress;
        const green = 89 + (204 - 89) * progress;
        const blue = 152 + (204 - 152) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    renderTabs() {
        return this.props.tabs.map((tab, i) => (
            <TouchableOpacity
                key={tab}
                activeOpacity={1}
                style={Styles.tab}
                onPress={() => this.props.goToPage(i)}
            >
                <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
                ref={icon => { this.tabIcons[i] = icon; }}
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
