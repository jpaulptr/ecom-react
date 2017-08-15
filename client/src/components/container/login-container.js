import { connect } from 'react-redux'
import Login from '../layout/login'

const mapStateToProps = (state) => {
    return {
        routing: state.routing,
        isLoggedIn: state.authentication.isLoggedIn,
    };
};

const LoginContainer = connect(
    mapStateToProps
)(Login)

export default LoginContainer