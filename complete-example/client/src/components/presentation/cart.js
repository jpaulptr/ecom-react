import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './cart/cart-button';
import Items from './cart/items';
import { Link } from 'react-router-dom'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: true,
            address: false,
            review: false,
            confirmation: false,
            shipping: { address: '', city: '', state: '', zip: '' },
            payment: { creditcard: '', expiration: '' },
        }

        this.updateWorkFlow = this.updateWorkFlow.bind(this);
        this.renderItems = this.renderItems.bind(this);
        this.renderConfirmation = this.renderConfirmation.bind(this);
        this.setConfirmation = this.setConfirmation.bind(this);
        this.setReview = this.setReview.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setInitial = this.setInitial.bind(this);
        this.shippingHandler = this.shippingHandler.bind(this);
        this.paymentHandler = this.paymentHandler.bind(this);
        this.isShippingPaymentComplete = this.isShippingPaymentComplete.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({
            confirmationNumber: props.confirmationNumber,
            orderComplete: true,
        });
    }

    updateWorkFlow(initial, address, review, confirmation) {
        this.setState({
            initial,
            address,
            review,
            confirmation,
        });
    }

    setInitial() {
        this.updateWorkFlow(true, false, false, false);
        this.setState({ shipping: {}, payment: {} })
    }

    setAddress() {
        this.updateWorkFlow(false, true, false, false);
    }

    setReview() {
        this.updateWorkFlow(false, false, true, false);
    }

    setConfirmation() {
        this.updateWorkFlow(false, false, false, true);
        this.props.placeOrder(this.state.shipping, this.state.payment)
    }

    render() {
        return (
            <div>
                {this.state.initial ? this.renderItems() : null}
                {!this.state.initial && !this.props.isLoggedIn ? this.renderLoginWarning() : null}
                {this.state.address && this.props.isLoggedIn ? this.renderAddress() : null}
                {this.state.review && this.props.isLoggedIn ? this.renderReview() : null}
                {this.state.confirmation && this.props.isLoggedIn ? this.renderConfirmation() : null}
            </div>
        )
    }

    renderLoginWarning() {
        return (
            <div>
                <h2>You must login </h2>
                <Link to={'/login'}> Login </Link>
            </div>
        )
    }

    renderItems(disallowEdits) {
        return (
            <div>
                <h2>Cart Items</h2>
                {
                    this.props.cart.length === 0 ? 'There is nothing in your cart yet' :
                        this.props.cart.map((item) => (<Items {...item} disallowEdits={disallowEdits} clickHandler={this.props.removeItemFromCart} />))
                }
                {this.props.cart.length !== 0 && !disallowEdits ? <button onClick={this.setAddress}>Start Order</button> : null}
            </div>
        )
    }

    shippingHandler(e) {
        const shipping = this.state.shipping;
        shipping[e.target.name] = e.target.value
        this.setState({ shipping });
    }

    paymentHandler(e) {
        const payment = this.state.payment;
        payment[e.target.name] = e.target.value
        this.setState({ payment });
    }

    isShippingPaymentComplete() {
        const st = this.state;
        return st.shipping.address.length > 0
            && st.shipping.city.length > 0
            && st.shipping.state.length > 0
            && st.shipping.zip.length > 0
            && st.payment.creditcard.length > 0
            && st.payment.expiration.length > 0

    }

    renderAddress() {
        return (
            <div>
                <h2>Shipping Address</h2>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={this.state.shipping.address} onChange={this.shippingHandler} />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={this.state.shipping.city} onChange={this.shippingHandler} />
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" value={this.state.shipping.state} onChange={this.shippingHandler} maxLength="2" minLength="2" required />
                    <label htmlFor="zip">Zip</label>
                    <input type="text" id="zip" name="zip" value={this.state.shipping.zip} onChange={this.shippingHandler} maxLength="10" required />
                </div>
                <h2>Payment Details</h2>
                <div>
                    <label htmlFor="creditcard">Credit Card</label>
                    <input type="text" id="creditcard" name="creditcard" value={this.state.payment.creditcard} onChange={this.paymentHandler} />
                </div>
                <div>
                    <label htmlFor="expiration">Expiration Date</label>
                    <input type="text" id="expiration" name="expiration" value={this.state.payment.expiration} onChange={this.paymentHandler} />
                </div>
                <button onClick={this.setInitial}>Cancel</button>
                <button disabled={!this.isShippingPaymentComplete()} onClick={this.setReview}>Review Order</button>
            </div>
        )
    }

    renderReview() {
        return (
            <div>
                <h2>Review Your Order</h2>
                {this.renderItems(true)}
                <div>
                    <span>Address:</span> {this.state.shipping.address}
                </div>
                <div>
                    <span>City:</span> {this.state.shipping.city}
                    <span>State:</span> {this.state.shipping.state}
                    <span>Zip:</span> {this.state.shipping.zip}
                </div>
                <button onClick={this.setInitial}>Cancel</button>
                <button onClick={this.setAddress}>Address and Payment</button>
                <button onClick={this.setConfirmation}>Place Order</button>
            </div>
        )
    }

    renderConfirmation() {
        return (
            <div>
                {this.state.orderComplete ?
                    <div>
                        <h2>Order Confirmation</h2>
                        <h3>Order Complete </h3>
                        <div>Confirmation number: {this.state.confirmationNumber}</div>
                        <Link to={'/orders'} >Orders</Link>
                    </div>
                    : <div><h3>Order Processing... </h3></div>
                }
            </div>
        )
    }
}

Cart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.shape.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
    })).isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
    addShippingAndPaymentInformation: PropTypes.func.isRequired,
};

export default Cart;
