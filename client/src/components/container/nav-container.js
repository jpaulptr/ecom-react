import { connect } from 'react-redux'
import Nav from '../layout/nav'
import { fetchSections } from '../../actions/retail'

const mapStateToProps = (state) => {
    return {
        sections: state.app.sections,
        isLoggedIn: state.authentication.isLoggedIn,
    };
};

const NavContainer = connect(
    mapStateToProps,
    { fetchSections }
)(Nav)

export default NavContainer