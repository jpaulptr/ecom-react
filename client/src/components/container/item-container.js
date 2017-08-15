import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItemIfNeeded } from '../../actions/retail'
import Item from '../layout/item'
import PropTypes from 'prop-types';

const mapStateToProps = (state, props) =>
  state.app.items.find((element) => element.id === props.match.params.id) || {};

// A container component to handle the data lookup from the store/server
class ContainerItem extends Component {
  componentWillMount() {
    this.props.fetchItemIfNeeded(this.props.match.params.id);
  }

  componentWillReceiveProps() {
    this.props.fetchItemIfNeeded(this.props.match.params.id);
  }

  render() {
    return (
      <Item {...this.props} />
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

// Bind the props and the action creator to the container.
const VisibleItem = connect(
  mapStateToProps,
  { fetchItemIfNeeded }
)(ContainerItem)

export default VisibleItem

