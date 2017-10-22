import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const orderItems = (props) =>
    (
        <div>
            <h2>{props.date}</h2>
            {
                props.items.map(element => {
                    return (
                        <div key={element.itemNumber}>
                            <div><Link to={`/item/${element.itemNumber}`}>{element.description} </Link> <span>code: {element.itemNumber} </span></div>
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
    date: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            itemNumber: PropTypes.number.required,
            description: PropTypes.string.required,
            number: PropTypes.number.required,
            price: PropTypes.number.required,
            total: PropTypes.number.required,
        }))
};

export default orderItems;