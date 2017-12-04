import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './nav'
import CartCountContainer from '../../container/cart-counter-container'
import LogoutButtonContainer from '../../container/logout-button-container'

const Header = (props) => (
    <header>
        <Link to='/'> <div> Logo</div></Link>
        <Nav {...props} />
        <CartCountContainer />
        <LogoutButtonContainer />
    </header>
)


export default Header;
