import { connect } from 'react-redux'
import Layout from './layout'
import { isLoggedIn } from '../reducers/state-mappers/authentication'
import { fetchSections } from '../actions/retail'
import { getSections } from '../reducers/state-mappers/retail'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: isLoggedIn(state),
        // you need to pass the routing state on, otherwise the routes don't work.
        routing: state.routing,
        sections: getSections(state),
    };
};

const LayoutContainer = connect(
    mapStateToProps,
    { fetchSections }
)(Layout)

export default LayoutContainer