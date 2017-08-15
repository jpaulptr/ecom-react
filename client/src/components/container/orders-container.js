import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllOrders } from '../../actions/retail'
import PropTypes from 'prop-types';
import Orders from '../presentation/order-item';

const mapStateToProps = (state) => {
  return {
    orders: state.app.orders.filter((element) =>
      element.userid === state.authentication.user.id
    )
  };
}

class OrdersContainer extends Component {
  componentWillMount() {
    this.props.fetchAllOrders();
  }

  render() {
    return (
      <div>
        {this.props.orders.map((element) => <Orders {...element} key={element.id}/>)}
      </div>
    );
  }
}

OrdersContainer.propTypes = {
  fetchAllOrders: PropTypes.func.required,
  orders: PropTypes.arrayOf({
      id: PropTypes.number.required,
  })
};

const OrdersContainerWraper = connect(
  mapStateToProps,
  { fetchAllOrders },
)(OrdersContainer);

export default OrdersContainerWraper;
