var React = require('react');
var PropTypes = require('prop-types');

function RepositoryList(props) {
	return (
		<ul className="repository-list">
			{props.repos.map(function (repo, index) {
				return (
					<li key={repo.id} className="repository">
						<div className="repository-rank">#{index + 1}</div>
						<div className="space-list-items">
							<img
								className="avatar"
								src={repo.owner.avatar_url}
								alt={'Avatar for ' + repo.owner.login}
							/>
							<span><a href={repo.html_url}>{repo.name}</a></span>
							<span>@{repo.owner.login}</span>
							<span>{repo.stargazers_count} stars</span>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

RepositoryList.propTypes = {
	repos: PropTypes.array.isRequired
};

module.exports = RepositoryList;
