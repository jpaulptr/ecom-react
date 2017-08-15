import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from '../container/add-to-cart-contianer';
import CartButton from './cart-button';

const Cart = (props) =>
    (
        <div>
            <h1>Cart Items</h1>
            <div>
                {
                    props.cart.map((item) => <div>
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                        <div>Total: {(item.price * item.count).toFixed(2)}</div>
                        <div>Count: {item.count} <AddToCartButton id={item.id} count={item.count} title={'Add to Cart'} /></div>

                        <CartButton id={item.id} title={'Remove from Cart'} clickHandler={props.clickHandler} hideCount={true} />
                    </div>)
                }
            </div>
        </div>
    )

Cart.propTypes = {
    cart: PropTypes.arrayOf({
        description: PropTypes.shape.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default Cart;
