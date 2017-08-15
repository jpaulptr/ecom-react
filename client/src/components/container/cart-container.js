import { connect } from 'react-redux'
import Cart from '../presentation/cart'
import {removeItemFromCart} from '../../actions/cart';

const mapStateToProps = (state) => {
  const items = state.cart.cart.map((element) => {
      return {
        ...element,
        ...state.app.items.find((ele) => element.id === ele.id)
      }
  });

  return  {cart: items};  
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickHandler: (id) => {
      dispatch(removeItemFromCart(id))
    }
  }
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
