import Heading from '../headers/heading';
const React = require('react');
const PropTypes = require('prop-types')

const Index = (props) => (
    <div>
        <Heading level={1}><i>Hi</i> {props.title} {props.lastName}</Heading>
        <Heading level={2}>{props.firstName} {props.lastName}</Heading>
        <div>
            {props.bio}
        </div>
    </div>
);

Index.propTypes = {
    title: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    bio: PropTypes.string
};

Index.defaultProps = {
    title: '',
    lastName: '',
    firstName: '',
    bio: '',
};

export default Index;