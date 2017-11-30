import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from '../presentation/signin'

class Login extends Component {
    constructor(props) {
        super(props);

        this.navigationState = props.location.state;
        this.from = props.location.state.from.pathname;
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(signInData) {
        if (signInData) {
            signInData.state = this.nanivagtionState;
            this.props.login(signInData);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.isLoggedIn ?
                        <Redirect to={{ pathname: this.from, state: { from: '/login' } }} />
                        : <SignIn handleSubmit={this.handleSubmit} {...this.props}/>
                }
            </div>
        );
    }
}

export default Login;