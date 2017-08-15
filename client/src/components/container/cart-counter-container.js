import { connect } from 'react-redux'
import CartCounter from '../presentation/cart-counter'

const mapStateToProps = (state) => {
  const itemCount = state.cart.cart.reduce((sum, element) => 
    sum += element.count
  , 0);

  return  {itemCount};  
};

const CartContainer = connect(
  mapStateToProps,
)(CartCounter);

export default CartContainer;
