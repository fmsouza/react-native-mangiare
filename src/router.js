import React from 'react';
import { Chat, Login, Tabs } from './pages';

export default (route, navigator) => {
    switch (route.id) {

        default:
        case 'login':
            return <Login navigator={navigator} args={route.args} />;
            
        case 'tabs':
            return <Tabs navigator={navigator} args={route.args} />;

        case 'chat':
            return <Chat navigator={navigator} args={route.args} />;

    }
};
