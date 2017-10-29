import { connect } from 'react-redux';
import CartButton from '../presentation/cart/cart-button.js';
import {addItemToCart} from '../../actions/cart';
import { getItemsById } from '../../reducers/state-mappers/retail'

const mapStateToProps = (state, props) => getItemsById(state, props.id)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickHandler: (id, count) => {
      dispatch(addItemToCart(ownProps.id, count))
    }
  }
}

const AddToCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartButton)

export default AddToCart;