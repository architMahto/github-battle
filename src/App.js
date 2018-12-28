var React = require('react');

var PopularRepositories = require('./Components/PopularRepositories');

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<PopularRepositories />
			</div>
		);
	}
}

module.exports = App;
