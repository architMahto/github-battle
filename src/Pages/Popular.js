var React = require('react');

var GithubApiService = require('../Services/GithubApiService');

var Loading = require('../Components/Loading');
var RepositoryList = require('../Components/RepositoryList');
var SelectLanguage = require('../Components/SelectLanguage');

class Popular extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang) {
		this.setState(function () {
			return { selectedLanguage: lang, repos: null };
		});

		GithubApiService.fetchPopularRepos(lang)
			.then(function (repos) {
				this.setState(function () {
					return { repos: repos };
				});
			}.bind(this));
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage} />
				{!this.state.repos ?
					<Loading /> :
					<RepositoryList repos={this.state.repos}/>}
			</div>
		);
	}
}

module.exports = Popular;
