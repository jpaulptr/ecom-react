import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CartCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemCount: props.itemCount,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({ itemCount: nextProps.itemCount })
    }

    render() {

        return (<div>
            <div>cart: {this.state.itemCount}</div>

        </div>);
    }
}

CartCounter.propTypes = {
    itemCount: PropTypes.number.isRequired,
};

export default CartCounter;