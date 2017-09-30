import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: props.isLoggedIn,
        }
    }
    componentWillMount() {
        this.props.fetchSections();
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            isLoggedIn: nextProps.isLoggedIn,
        }

        this.props.fetchSections();
    }

    render() {
        return (
            <nav>
                <list>
                    <li><Link to={'/'}>Home</Link></li>
                    {
                        this.props.sections.map((section) =>
                            <li key={section.id}><Link to={`/section/${section.id}`}>{section.title}</Link></li>
                        )
                    }
                    <li><Link to={'/cart'}>Cart</Link></li>
                    <li><Link to={'/my-account'}>My Account</Link></li>
                    {
                        this.state.isLoggedIn ?
                            <li><Link to={'/orders'}>Orders</Link></li>
                            : null
                    }
                </list>
            </nav>
        );
    }

}

Nav.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })).isRequired,
};

export default Nav;
