import { connect } from 'react-redux'
import Layout from '../layout/layout'
import { isLoggedIn } from '../../reducers/state-mappers/authentication'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: isLoggedIn(state),
        // you need to pass the routing state on, otherwise the routes don't work.
        routing: state.routing,
    };
};

const LayoutContainer = connect(
    mapStateToProps
)(Layout)

export default LayoutContainer