import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, children }) => {
    switch (level) {
        case 1:
            return (<h1>{children}</h1>);
        case 2:
            return (<h2>{children}</h2>);
        case 3:
            return (<h3>{children}</h3>);
        default:
            return (<div>{children}</div>);
    }
}

Heading.propTypes = {
    level: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default Heading;
