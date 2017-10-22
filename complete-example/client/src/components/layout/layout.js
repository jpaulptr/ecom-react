import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../layout/private-route'

// react router
// This particular use of history is to get around a bug.
// import { createBrowserHistory } from 'history';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { syncHistoryWithStore } from 'react-router-redux';

//Components
import Index from './index.js';
import VisibleItem from '../container/item-container';
import VisibleSection from '../container/section-container';
import Cart from '../container/cart-container';
import Header from './header';
import Footer from './footer';
import LogIn from './login'
import MyAccount from './my-account'
import Orders from './orders'

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: props.isLoggedIn,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            isLoggedIn: nextProps.isLoggedIn
        }
    }

    render() {
        return (
            <div>                                
                <Header/>
                <main>
                    <Switch>
                        {<Route exact path='/' component={Index} />}
                        {<Route path='/about' component={Index} />}
                        {<Route path='/contact' component={Index} />}
                        {<Route path='/section/:id' component={VisibleSection} />}
                        {<Route path='/item/:id' component={VisibleItem} />}
                        {<Route path='/cart' component={Cart} />}
                        {<Route path='/login' component={LogIn} />}
                        {<PrivateRoute path='/my-account' component={MyAccount} isLoggedIn={this.state.isLoggedIn} />}
                        {<PrivateRoute path='/orders' component={Orders} isLoggedIn={this.state.isLoggedIn} />}
                    </Switch>
                </main>
                <Footer />
            </div>
        )
    }
}
export default Layout
