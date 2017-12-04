import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Teaser = ({ description, imageUrl, id, caption }) => (
    <div>
        <div>
            <img alt={description} src={imageUrl} />
        </div>
        <div>
            <p>{description}</p>
            <Link to={`/item/${id}`}>{caption}</Link>
        </div>
    </div>
)

Teaser.propTypes = {
    id: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default Teaser;
