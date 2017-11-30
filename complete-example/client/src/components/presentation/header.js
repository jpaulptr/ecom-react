import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../container/nav-container';
import CartCountContainer from '../container/cart-counter-container'
import LogoutButtonContainer from '../container/logout-button-container'

const Header = () => (
    <header>
        <Link to='/'> <div> Logo</div></Link>
        <Nav />
        <CartCountContainer />
        <LogoutButtonContainer />
    </header>
)


export default Header;
