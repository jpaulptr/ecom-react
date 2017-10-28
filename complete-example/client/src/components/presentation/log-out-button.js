import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LogoutButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: props.isLoggedIn
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
                isLoggedIn: newProps.isLoggedIn
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ? <button onClick={this.props.logoutHandler}>Log Out</button> :
                        <Link to={'/my-account'} >Log In </Link>
                }
            </div>
        )

    }
}

LogoutButton.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired,
    logoutHandler: PropTypes.func.isRequired,
};

export default LogoutButton;