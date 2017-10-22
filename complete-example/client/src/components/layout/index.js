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
                <h1>Hi {this.props.title} {this.props.lastName}</h1>
                <h2>{this.props.firstName} {this.props.lastName}</h2>
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