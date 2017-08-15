import { connect } from 'react-redux';

import CartButton from '../presentation/cart-button.js';

import {addItemToCart} from '../../actions/cart';

const mapStateToProps = (state, props) => 
  state.app.items.find((element) => element.id ===props.id)

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