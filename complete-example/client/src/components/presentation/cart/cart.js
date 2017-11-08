import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './cart-button';
import Items from './items';
import { Link } from 'react-router-dom';
import TextBox from '../form-controls/text-box';
import Button from '../form-controls/button';
import Heading from '../headers/heading';

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
                <Heading level={2}>You must login</Heading>
                <Link to={'/login'}> Login </Link>
            </div>
        )
    }

    renderItems(disallowEdits) {
        return (
            <div>
                <Heading level={2}>Cart Items</Heading>
                {
                    this.props.cart.length === 0 ? 'There is nothing in your cart yet' :
                        this.props.cart.map((item) => (<Items {...item} disallowEdits={disallowEdits} clickHandler={this.props.removeItemFromCart} />))
                }
                {this.props.cart.length !== 0 && !disallowEdits ? <Button onClick={this.setAddress}>Start Order</Button> : null}
            </div>
        )
    }

    renderAddress() {
        return (
            <div>
                <Heading level={2}>Shipping Address</Heading>
                <div>
                    <TextBox id={'address'} title={"Address"} value={this.state.shipping.address} changeHandler={this.shippingHandler} />
                </div>
                <div>
                    <TextBox id={'city'} title={"City"} value={this.state.shipping.city} changeHandler={this.shippingHandler} />
                    <TextBox id={'state'} title={"State"} value={this.state.shipping.state} changeHandler={this.shippingHandler} />
                    <TextBox id={'zip'} title={"Zip"} value={this.state.shipping.zip} changeHandler={this.shippingHandler} />
                </div>
                <Heading level={2}>Payment Details</Heading>
                <div>
                    <TextBox id={'creditcard'} title={"Credit Card"} value={this.state.payment.creditcard} changeHandler={this.paymentHandler} />
                </div>
                <div>
                    <TextBox id={'expiration'} title={"Expiration Date"} value={this.state.payment.expiration} changeHandler={this.paymentHandler} />
                </div>
                <Button onClick={this.setInitial}>Cancel</Button>
                <Button disabled={!this.isShippingPaymentComplete()} onClick={this.setReview}>Review Order</Button>
            </div>
        )
    }

    renderReview() {
        return (
            <div>
                <Heading level={2}>Review Your Order</Heading>

                {this.renderItems(true)}
                <div>
                    <span>Address:</span> {this.state.shipping.address}
                </div>
                <div>
                    <span>City:</span> {this.state.shipping.city}
                    <span>State:</span> {this.state.shipping.state}
                    <span>Zip:</span> {this.state.shipping.zip}
                </div>
                <Button onClick={this.setInitial} >Cancel</Button>
                <Button onClick={this.setAddress}>Address and Payment</Button>
                <Button onClick={this.setConfirmation}>Place Order</Button>
            </div>
        )
    }

    renderConfirmation() {
        return (
            <div>
                {this.state.orderComplete ?
                    <div>
                        <Heading level={2}>Order Confirmation</Heading>
                        <Heading level={3}>Order Complete</Heading>
                        <div>Confirmation number: {this.state.confirmationNumber}</div>
                        <Link to={'/orders'} >Orders</Link>
                    </div>
                    : <div><Heading level={3}>Order Processing... </Heading></div>
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
