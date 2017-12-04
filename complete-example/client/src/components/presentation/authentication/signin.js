import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../form-controls/button';
import TextBox from '../form-controls/text-box';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = props.handleSubmit.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            username: '',
            password: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            username: '',
            password: '',
        };
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if (e.currentTarget && e.currentTarget.elements) {
            const elementArray = Array.from(e.currentTarget.elements);
            const results = {
                userName: elementArray.find((element) => element.name === 'username').value,
                password: elementArray.find((element) => element.name === 'password').value,
            };

            if (results.userName.length > 0 && results.password.length > 0) {
                this.handleSubmit(results);
            }
        }
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <TextBox id={'username'} title={'User Name:'} value={this.state.username} changeHandler={this.onChange} />

                    <TextBox id={'password'} title={'Password:'} value={this.state.password} changeHandler={this.onChange} />
                    {
                        this.props.hasLoginError ?
                        <div>Has an error</div> : null
                    }
                    <Button> Log In </Button>
                    <Link to='forgot' > Forgot password?</Link>
                </div>

            </form>
        )
    }
}

SignIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SignIn;