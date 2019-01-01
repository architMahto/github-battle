var React = require('react');
var ReactRouter = require('react-router-dom');

var Navbar = require('./Components/Navbar');

var Battle = require('./Pages/Battle');
var Home = require('./Pages/Home');
var Popular = require('./Pages/Popular');
var Results = require('./Pages/Results');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/battle" component={Battle} />
						<Route path="/battle/results" component={Results} />
						<Route path="/popular" component={Popular} />
						<Route render={function () {
							return (<p>Not Found</p>);
						}} />
					</Switch>
				</div>
			</Router>
		);
	}
}

module.exports = App;
