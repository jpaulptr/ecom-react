import { connect } from 'react-redux'
import Layout from '../layout/layout'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
        // you need to pass the routing state on, otherwise the routes don't work.
        routing: state.routing,
    };
};

const LayoutContainer = connect(
    mapStateToProps
)(Layout)

export default LayoutContainer