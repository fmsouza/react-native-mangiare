import React from 'react';
import { Second, Tabs } from './pages';

export default (route, navigator) => {
    switch (route.id) {

        default:
        case 'tabs':
            return <Tabs navigator={navigator} args={route.args} />;

        case 'second':
            return <Second navigator={navigator} args={route.args} />;

    }
};
