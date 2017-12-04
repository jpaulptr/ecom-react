import { connect } from 'react-redux'
import { fetchAllOrders } from '../../actions/retail'
import OrderGroup from '../presentation/orders/order-group';
import { getUserId } from '../../reducers/state-mappers/authentication'
import { getOrdersByUserId } from '../../reducers/state-mappers/retail'

const mapStateToProps = (state) => {
  return {
    orders:  getOrdersByUserId(state, getUserId(state))
  };
}

const OrdersContainerWraper = connect(
  mapStateToProps,
  { fetchAllOrders },
)(OrderGroup);

export default OrdersContainerWraper;
