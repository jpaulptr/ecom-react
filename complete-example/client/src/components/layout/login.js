import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import SignIn from '../presentation/signin'

import { Login as loginAction } from '../../actions/authentication'

const mapStateToProps = (state) => {
    return {
        routing: state.routing,
        isLoggedIn: state.authentication.isLoggedIn,
    };
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.navigationState = props.location.state;
        this.from = props.location.state.from.pathname;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isLoggedIn: props.isLoggedIn,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            isLoggedIn: nextProps.isLoggedIn,
        }
    }

    handleSubmit(signInData) {

        if (signInData) {
            signInData.state = this.nanivagtionState;
            this.props.dispatch(loginAction(signInData));
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        <Redirect to={{ pathname: this.from, state: { from: '/login' } }} />
                        : <SignIn handleSubmit={this.handleSubmit} />
                }
            </div>
        );
    }
}

const VisibleLogin = connect(
    mapStateToProps
)(Login)

export default VisibleLogin;