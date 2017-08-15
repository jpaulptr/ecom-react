import React from 'react';
import PropTypes from 'prop-types';

import AddButtonContainer from '../container/add-to-cart-contianer';

const Item = (props) =>
    (
        <div className='item'>
            <h2 >{props.description}</h2>
            <div>{props.caption}</div>
            <div>{props.price}</div>
            <AddButtonContainer {...props} title={'Add to Cart'} />
        </div>
    );

Item.propTypes = {
    caption: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Item;