import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../container/nav-container';
import CartCountContainer from '../container/cart-counter-container'

class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'> <div> Logo</div></Link>
                <Nav/>
                <CartCountContainer />
            </header>
        )
    }
}

export default Header;
