var React = require('react');

var SelectLanguage = require('../Components/SelectLanguage');

class Popular extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang) {
		this.setState(function () {
			return { selectedLanguage: lang };
		});
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage} />
			</div>
		);
	}
}

module.exports = Popular;
