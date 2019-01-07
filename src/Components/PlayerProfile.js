var React = require('react');
var PropTypes = require('prop-types');

var PlayerPreview = require('./PlayerPreview');

function PlayerProfile(props) {
	var info = props.info;
	var label = props.label;
	var score = props.score;

	return (
		<div>
			<h1 className="header">{label}</h1>
			<h3 style={{textAlign: 'center'}}>Score: {score}</h3>
			<PlayerPreview
				avatar={info.avatar_url}
				username={info.login}
			>
				<ul className="space-list-items">
					{info.name && <li>{info.name}</li>}
					{info.location && <li>{info.location}</li>}
					{info.company && <li>{info.company}</li>}
					<li>Followers: {info.followers}</li>
					<li>Following: {info.following}</li>
					<li>Public Repos: {info.public_repos}</li>
					{info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
				</ul>
			</PlayerPreview>
		</div>
	);
}

PlayerProfile.propTypes = {
	info: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
};

module.exports = PlayerProfile;
