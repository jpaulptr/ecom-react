import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, onClick, disabled = false}) => (
    <button disabled={disabled} onClick={onClick}>{children}</button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
