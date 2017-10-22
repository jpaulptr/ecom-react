import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Index from './index.js';
import Footer from './footer';


class Layout extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <main>
                    <Switch>
                        <Route exact path='/' component={Index} />
                        <Route path='/about' component={Index} />
                        <Route path='/contact' component={Index} />
                    </Switch>
                </main>
                <Footer />
            </div>
        )
    }
}
export default Layout
