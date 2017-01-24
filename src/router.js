import React from 'react';
import { Login, Second, Tabs } from './pages';

export default (route, navigator) => {
    switch (route.id) {

        default:
        case 'login':
            return <Login navigator={navigator} args={route.args} />;
            
        case 'tabs':
            return <Tabs navigator={navigator} args={route.args} />;

        case 'second':
            return <Second navigator={navigator} args={route.args} />;

    }
};
