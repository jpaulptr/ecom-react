import React, { Component } from 'react'
import Item from '../layout/item'
import PropTypes from 'prop-types';

// A container component to handle the data lookup from the store/server
class ContainerItem extends Component {
    componentDidMount() {
      this.props.fetchItemIfNeeded(this.props.match.params.id);
    }
  
    componentWillReceiveProps() {
      this.props.fetchItemIfNeeded(this.props.match.params.id);
    }
  
    render() {
      return (
        this.props.id ? <Item {...this.props} /> : null
      );
    }
  }
  
  ContainerItem.propTypes = {
    fetchItemIfNeeded: PropTypes.func.isRequired,
    match: PropTypes.shape(
      {
        params: PropTypes.shape({
          id: PropTypes.string.isRequired,
        })
      }
    ).isRequired,
  }

  export default ContainerItem;