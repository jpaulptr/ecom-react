import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                    <label htmlFor='username'> User Name:</label>
                    <input type='text' id='username' name='username' value={this.state.username} onChange={this.onChange} />

                    <label htmlFor='password'> User Name:</label>
                    <input type='text' id='password' name='password' value={this.state.password} onChange={this.onChange} />

                    <button> Log In </button>
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