import { connect } from 'react-redux';
import LogoutButton from '../presentation/authentication/log-out-button';
import { isLoggedIn } from '../../reducers/state-mappers/authentication';
import {Logout} from '../../actions/authentication';

const mapStateToProps = (state) => {
    return { isLoggedIn: isLoggedIn(state) }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        logoutHandler: () =>{
            dispatch(Logout());
        }
    }
}

const LogoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutButton);

export default LogoutContainer;