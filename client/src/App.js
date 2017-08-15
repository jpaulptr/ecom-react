import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, history } from './store/store';
import { ConnectedRouter } from 'react-router-redux';

import Layout from './components/container/layout-container'
//import Layout from './components/layout/layout'

// Set up the data store and the routing
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout />
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
