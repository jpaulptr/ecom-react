import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = (props) => (
        <nav>
            <list>
                <li><Link to={'/'}>Home</Link></li>
                {
                    props.sections.map((section) =>
                        <li key={section.id}><Link to={`/section/${section.id}`}>{section.title}</Link></li>
                    )
                }
                <li><Link to={'/cart'}>Cart</Link></li>
                <li><Link to={'/my-account'}>My Account</Link></li>
                {
                    props.isLoggedIn ?
                        <li><Link to={'/orders'}>Orders</Link></li>

                        : null
                }
            </list>
        </nav>
    )


Nav.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })).isRequired,
};

export default Nav;
