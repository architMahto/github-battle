var React = require('react');

class Results extends React.Component {
	constructor(props) {
		super(props);

		console.log('this.props:', this.props);
	}

	render() {
		return (
			<div>{process.env.REACT_APP_GITHUB_API_CLIENT_ID}</div>
		);
	}
}

module.exports = Results;
