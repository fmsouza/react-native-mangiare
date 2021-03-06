import React from 'react';
import { Platform } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Theme from '../theme';

function getSize(size) {
    if ((size >>> 0) > 0) return size;
    switch (size) {
        case 'small': return Theme.iconSizeSmall;
        default:
        case 'medium': return Theme.iconFontSize;
        case 'large': return Theme.iconSizeLarge;
    }
} 

export default class Icon extends React.Component {

    setNativeProps(props) {
        this.refs.icon.setNativeProps(props);
    }

    render() {
        let { name, size, color } = this.props;
        name = (Platform.OS === 'ios') ? `ios-${name}` : `md-${name}`;
        size = getSize(size);
        color = color || '#000';
        return <Ionicon {...this.props} name={name} size={size} color={color} ref="icon" />;
    }

}
