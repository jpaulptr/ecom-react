import { connect } from 'react-redux'
import Nav from '../layout/nav'

const mapStateToProps = (state) => {
    return {
        sections: state.app.sections,
        isLoggedIn: state.authentication.isLoggedIn,
    };
};

const NavContainer = connect(
    mapStateToProps
)(Nav)

export default NavContainer