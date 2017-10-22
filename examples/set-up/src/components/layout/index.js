const React = require('react');
const PropTypes = require('prop-types')

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Page {this.props.match.path}</h1>
            </div>
        );
    }
}

export default Index;