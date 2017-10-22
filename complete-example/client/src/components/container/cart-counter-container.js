import { connect } from 'react-redux'
import CartCounter from '../presentation/cart-counter'
import { getCartCount } from '../../reducers/state-mappers/cart'

const mapStateToProps = (state) => {
  const itemCount = getCartCount(state);

  return  {itemCount};  
};

const CartContainer = connect(
  mapStateToProps,
)(CartCounter);

export default CartContainer;
