import React, { Component } from 'react'
import Teaser from '../layout/teaser.js';
import PropTypes from 'prop-types';

class Section extends Component {
    componentDidMount() {
        this.props.fetchSections();
    }

    componentWillReceiveProps() {
        this.props.fetchSections();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
                <div>
                    {
                        this.props.items ?
                            this.props.items.map((teaser) =>
                                <Teaser key={teaser.id} props={teaser} />
                            )
                            : null
                    }
                </div>
            </div>
        );
    }
    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Section;