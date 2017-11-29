import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ id, value, changeHandler, title }) => (
    <label htmlFor={id}>{title}
        <input type="text" id={id} name={id} value={value} onChange={changeHandler} />
    </label>
)

TextBox.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

export default TextBox;