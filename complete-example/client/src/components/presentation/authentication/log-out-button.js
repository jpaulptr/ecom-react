import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../form-controls/button';

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
                    this.state.isLoggedIn ? <Button onClick={this.props.logoutHandler}>Log Out</Button> :
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