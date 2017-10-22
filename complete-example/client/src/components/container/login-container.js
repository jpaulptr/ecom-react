import { connect } from 'react-redux'
import Login from '../layout/login'
import { isLoggedIn } from '../../reducers/state-mappers/authentication'

const mapStateToProps = (state) => {
    return {
        routing: state.routing,
        isLoggedIn: isLoggedIn(state),
    };
};

const LoginContainer = connect(
    mapStateToProps
)(Login)

export default LoginContainer