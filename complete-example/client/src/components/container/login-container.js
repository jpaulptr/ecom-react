import { connect } from 'react-redux';
import Login from '../layout/login'
import { Login as loginAction } from '../../actions/authentication'

const mapStateToProps = (state) => {
    return {
        routing: state.routing,
        isLoggedIn: state.authentication.isLoggedIn,
        hasLoginError: state.authentication.hasLoginError,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (signInData) => dispatch(loginAction(signInData))
    };
}

const VisibleLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default VisibleLogin;