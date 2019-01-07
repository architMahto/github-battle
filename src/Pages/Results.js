var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
var queryString = require('query-string');

var GithubApiService = require('../Services/GithubApiService');

var Loading = require('../Components/Loading');
var PlayerProfile = require('../Components/PlayerProfile');

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		};
	}

	componentDidMount () {
		this.players = queryString.parse(this.props.location.search);

		GithubApiService.battle([
			this.players.playerOneName,
			this.players.playerTwoName
		]).then(function (results) {
			if (results === null) {
				return this.setState(function () {
					return {
						error: 'Looks like there was an error. Check that both users exist on Github',
						loading: false
					};
				});
			}

			this.setState(function () {
				return {
					error: null,
					winner: results[0],
					loser: results[1],
					loading: false
				};
			});
		}.bind(this));
	}

	render() {
		var error = this.state.error;
		var winner = this.state.winner;
		var loser = this.state.loser;
		var loading = this.state.loading;

		if (loading === true) {
			return <Loading />;
		}

		if (error) {
			return (
				<div>
					<p>{error}</p>
					<Link to="/battle">Reset</Link>
				</div>
			);
		}

		return (
			<div className="row">
				<PlayerProfile info={winner.profile} label="Winner" score={winner.score}/>
				<PlayerProfile info={loser.profile} label="Loser" score={loser.score}/>
			</div>
		);
	}
}

Results.propTypes = {
	location: PropTypes.object.isRequired
};

module.exports = Results;
