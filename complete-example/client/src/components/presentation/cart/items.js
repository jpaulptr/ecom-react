import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from '../../container/add-to-cart-contianer';
import CartButton from './cart-button';

const Cart = (props) =>
    (
        <div>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <div>Total: {(props.price * props.count).toFixed(2)}</div>
            <div>Count: {props.count} 
            { 
                props.disallowEdits? null :
                <AddToCartButton id={props.id} count={props.count} title={'Add to Cart'} />
            }
            </div>
            {
                props.disallowEdits? null :
                <CartButton id={props.id} title={'Remove from Cart'} clickHandler={props.clickHandler} hideCount={true} />
               
            }
            
        </div>
    )


Cart.propTypes = {
    description: PropTypes.shape.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired,
    disallowEdits: PropTypes.bool.isRequired,
};

export default Cart;
