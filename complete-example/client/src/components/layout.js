import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './presentation/navagational/private-route'

//Components
import Index from './presentation/layout-templates/index';
import VisibleItem from './container/item-container';
import VisibleSection from './container/section-container';
import Cart from './container/cart-container';
import Header from './presentation/navagational/header';
import Footer from './presentation/navagational/footer';

import LogInContainer from './container/login-container';
import MyAccount from './presentation/layout-templates/my-account'
import Orders from './container/orders-container'

class Layout extends Component {
    componentDidMount(){
        this.props.fetchSections();
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <main>
                    <Switch>
                        {<Route exact path='/' component={Index} />}
                        {<Route path='/about' component={Index} />}
                        {<Route path='/contact' component={Index} />}
                        {<Route path='/section/:id' component={VisibleSection} />}
                        {<Route path='/item/:id' component={VisibleItem} />}
                        {<Route path='/cart' component={Cart} />}
                        {<Route path='/login' component={LogInContainer} />}
                        {<PrivateRoute path='/my-account' component={MyAccount} isLoggedIn={this.props.isLoggedIn} />}
                        {<PrivateRoute path='/orders' component={Orders} isLoggedIn={this.props.isLoggedIn} />}
                    </Switch>
                </main>
                <Footer />
            </div>
        )
    }

}
export default Layout
