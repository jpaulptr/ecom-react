import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Orders from './order-item';
import Heading from '../headers/heading';

class OrdersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllOrders();
  }

  render() {
    return (
      <div>
        <Heading level={1}>Orders</Heading>
        {this.props.orders.map((element) => <Orders {...element} key={element.id} />)}
      </div>
    );
  }
}

OrdersContainer.propTypes = {
  fetchAllOrders: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.required,
  }))
};

export default OrdersContainer;