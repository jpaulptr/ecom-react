import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../layout/private-route'

//Components
import Index from './index.js';
import VisibleItem from '../container/item-container';
import VisibleSection from '../container/section-container';
import Cart from '../container/cart-container';
import Header from '../presentation/header';
import Footer from '../presentation/footer';
//import LogIn from './login'
import LogInContainer from '../container/login-container';
import MyAccount from './my-account'
import Orders from './orders'

const Layout = (props) => (
    <div>
        <Header isLoggedIn={props.isLoggedIn} />
        <main>
            <Switch>
                {<Route exact path='/' component={Index} />}
                {<Route path='/about' component={Index} />}
                {<Route path='/contact' component={Index} />}
                {<Route path='/section/:id' component={VisibleSection} />}
                {<Route path='/item/:id' component={VisibleItem} />}
                {<Route path='/cart' component={Cart} />}
                {<Route path='/login' component={LogInContainer} />}
                {<PrivateRoute path='/my-account' component={MyAccount} isLoggedIn={props.isLoggedIn} />}
                {<PrivateRoute path='/orders' component={Orders} isLoggedIn={props.isLoggedIn} />}
            </Switch>
        </main>
        <Footer />
    </div>
)

export default Layout
