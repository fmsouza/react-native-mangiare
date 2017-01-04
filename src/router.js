import React from 'react';
import { Home, Second, Tabs } from './pages';

export default (route, os, navigator) => {
    switch (route.id) {

        default:
        case 'tabs':
            return <Tabs navigator={navigator} args={route.args} />;

        case 'home':
            return <Home navigator={navigator} args={route.args} />;

        case 'second':
            return <Second navigator={navigator} args={route.args} />;
    }
};
