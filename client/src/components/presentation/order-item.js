import React from 'react';
import PropTypes from 'prop-types';

const orderItems = (props) =>
    (
        <div>
            <h2>{props.date}</h2>
            {
                props.items.map(element => {
                    return (
                        <div key={element.itemNumber}>
                            <div>{element.description} <span>code: {element.itemNumber} </span></div>
                            <div>count: {element.number}</div>
                            <div>price: {element.price}</div>
                            <div>total: {element.total}</div>
                        </div>
                    )
                })
            }
            <div>total{props.total}</div>
        </div>
    );

orderItems.propTypes = {
    date: PropTypes.string.required,
    total: PropTypes.number.required,
    items: PropTypes.arrayOf({
        itemNumber: PropTypes.number.required,
        description: PropTypes.string.required,
        number: PropTypes.number.required,
        price: PropTypes.number.required,
        total: PropTypes.number.required,
    })
};

export default orderItems;