import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
        forceRenderForNavigationHack: Math.random(),
    };
};

class AuthenticationManager extends Component {
    render() {
        return (
            <div>
                <header>
                    {/*need to switch this to use the store...*/}
                    {<Nav nav={state.nav} />}
                </header>
                <main>
                    {<Route exact path='/' component={Index} />}
                    {<Route path='/about' component={Index} />}
                    {<Route path='/contact' component={Index} />}
                    {<Route path='/section/:id' component={VisibleSection} />}
                    {<Route path='/item/:id' component={VisibleItem} />}
                    {<Route path='/cart' component={Cart} />}
                </main>
            </div>
        )
    }
}

const VisibleAuthenticationManager = connect(
    mapStateToProps
)(AuthenticationManager)

export default VisibleAuthenticationManager;
