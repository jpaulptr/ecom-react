import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Orders from '../presentation/order-item';

class OrdersContainer extends Component {
    componentWillMount() {
      this.props.fetchAllOrders();
    }
  
    render() {
      return (
        <div>
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