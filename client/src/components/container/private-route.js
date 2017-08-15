import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            props: props,
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.state = {
            props: nextProps
        }
    }

    render() {
        return this.internalRender(this.state.props);
    }

    internalRender({ component: Component, isLoggedIn, ...rest }) {
        return (
            <Route
                {...rest}
                render={(props) => isLoggedIn ?
                    <Component {...props} /> :
                    <Redirect to={{pathname: '/login', state: { from: props.location} }} />}
            />
        )
    }
};

export default PrivateRoute;