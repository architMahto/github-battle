var React = require('react');
var Link = require('react-router-dom').Link;

var PlayerInput = require('../Components/PlayerInput');
var PlayerPreview = require('../Components/PlayerPreview');

class Battle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null,
		};

		this.handleReset = this.handleReset.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleReset(id) {
		this.setState(function () {
			var newState = {};

			newState[id + 'Name'] = '';
			newState[id + 'Image'] = null;

			return newState;
		});
	}

	handleSubmit(id, username) {
		this.setState(function () {
			var newState = {};

			newState[id + 'Name'] = username;
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';

			return newState;
		});
	}

	render() {
		var match = this.props.match;
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;
		var playerOneImage = this.state.playerOneImage;
		var playerTwoImage = this.state.playerTwoImage;

		return (
			<div>
				<div className="row">
					{!playerOneName &&
						<PlayerInput
							id="playerOne"
							label="Player One"
							onSubmit={this.handleSubmit}
						/>}

					{playerOneImage !== null &&
						<PlayerPreview
							avatar={playerOneImage}
							username={playerOneName}
							onReset={this.handleReset}
							id="playerOne"
						/>}

					{!playerTwoName &&
						<PlayerInput
							id="playerTwo"
							label="Player Two"
							onSubmit={this.handleSubmit}
						/>}

					{playerTwoImage !== null &&
						<PlayerPreview
							avatar={playerTwoImage}
							username={playerTwoName}
							onReset={this.handleReset}
							id="playerTwo"
						/>}
				</div>

				{playerOneImage && playerTwoName &&
					<Link
						className="button"
						to={{
							pathname: match.url + '/results',
							search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
						}}>
						Battle
					</Link>}
			</div>
		);
	}
}

module.exports = Battle;
