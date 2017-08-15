import React from 'react';
import PropTypes from 'prop-types';
import Teaser from './teaser.js';

const Section = (props) => (
    <div>
        <h1>{props.title}</h1>
        <div>{props.description}</div>
        <div>
            {
                props.items.map((teaser) =>
                    <Teaser key={teaser.id} props={teaser} />
                )
            }
        </div>
    </div>
);



Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.arrayOf({}).isRequired,
};


export default Section;