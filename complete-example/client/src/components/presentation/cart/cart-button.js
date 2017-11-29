import React from 'react';
import PropTypes from'prop-types';
import Button from '../form-controls/button';
import Input from '../form-controls/input';

class CartButton extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

        this.state = {
            count: 1,
        }
    }

    changeHandler(e) {
        this.setState({ count: e.target.value | 0 })
    }

    clickHandler(e) {
        e.preventDefault();
        this.props.clickHandler(this.props.id, this.state.count);
    }

    render() {
        return (
            <form onSubmit={this.clickHandler}>
                {this.props.hideCount ?
                    null
                    : <Input type='number' name='itemcount' min='1' max='100' value={this.state.count} onChange={this.changeHandler}/>

                }
                
                <Button>{this.props.title}</Button>
            </form>
        );
    }
}

CartButton.propTypes = {
    id: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default CartButton;
