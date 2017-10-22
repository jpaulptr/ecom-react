import { connect } from 'react-redux'
import Cart from '../presentation/cart'
import {removeItemFromCart} from '../../actions/cart';
import { getItemsById } from '../../reducers/state-mappers/retail'
import { getCart } from '../../reducers/state-mappers/cart'

const mapStateToProps = (state) => {
  const items = getCart(state).map((element) => {
      return {
        ...element,
        ...getItemsById(state, element.id)
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
