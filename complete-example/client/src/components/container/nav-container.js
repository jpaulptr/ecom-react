import { connect } from 'react-redux'
import Nav from '../layout/nav'
import { fetchSections } from '../../actions/retail'
import { isLoggedIn } from '../../reducers/state-mappers/authentication'
import { getSections } from '../../reducers/state-mappers/retail'

const mapStateToProps = (state) => {
    return {
        sections: getSections(state),
        isLoggedIn: isLoggedIn(state),
    };
};

const NavContainer = connect(
    mapStateToProps,
    { fetchSections }
)(Nav)

export default NavContainer