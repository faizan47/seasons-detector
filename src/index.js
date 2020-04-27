import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import Season from './Season';

class App extends React.Component {
	state = { lat: null, error: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(error) => this.setState({ error: error.message })
		);
	}

	renderContent() {
		if (!this.state.long && this.state.error) return <h3>Error:{this.state.error} </h3>;

		if (this.state.lat && !this.state.error) return <Season lat={this.state.lat} />;

		return <Loader message="Detecting your location. You may need to grant permission..." />;
	}
	render() {
		return <div className="parent">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
