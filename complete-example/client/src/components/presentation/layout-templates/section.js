import React from 'react'
import Teaser from './teaser.js';
import PropTypes from 'prop-types';

const Section = (props) => (
    <div>
        <h1>{props.title}</h1>
        <div>{props.description}</div>
        <div>
            {
                props.items ?
                    props.items.map((teaser) =>
                        <Teaser key={teaser.id} {...teaser} />
                    )
                    : null
            }
        </div>
    </div>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Section;