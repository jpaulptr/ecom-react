import Heading from '../presentation/headers/heading';
const React = require('react');
const PropTypes = require('prop-types')

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Heading level={1}><i>Hi</i> {this.props.title} {this.props.lastName}</Heading>
                <Heading level={2}>{this.props.firstName} {this.props.lastName}</Heading>
                <div>
                    {this.props.bio}
                </div>
            </div>
        );
    }
}

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