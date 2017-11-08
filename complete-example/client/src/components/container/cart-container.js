import { connect } from 'react-redux'
import Cart from '../presentation/cart/cart'
import {removeItemFromCart, addShippingAndPaymentInformation, placeOrder} from '../../actions/cart';
import { getItemsById } from '../../reducers/state-mappers/retail'
import { getCart, getOrderConfirmation } from '../../reducers/state-mappers/cart'
import { isLoggedIn } from '../../reducers/state-mappers/authentication'

const mapStateToProps = (state) => {
  const items = getCart(state).map((element) => {
      return {
        ...element,
        ...getItemsById(state, element.id),
      }
  });

  return  {cart: items, isLoggedIn: isLoggedIn(state), confirmationNumber: getOrderConfirmation(state) };  
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (id) => {
      dispatch(removeItemFromCart(id))
    },
    addShippingAndPaymentInformation: (address, payment) => {
      dispatch(addShippingAndPaymentInformation(address, payment));
    },
    placeOrder: (address, payment, cart) => {
      dispatch(placeOrder(address, payment, cart));
    },
  }
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
