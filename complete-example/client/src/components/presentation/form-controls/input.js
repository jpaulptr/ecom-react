import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, onChange, ...props }) => (
    <span><input {...props} name={name} id={name} value={value} onChange={onChange} /> </span>
);

Input.propTypes= {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input;
