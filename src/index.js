import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import Season from './Season';

const App = () => {
	const [ lat, setLat ] = useState(null);
	const [ errorMessage, setError ] = useState('');
	useEffect(
		() =>
			window.navigator.geolocation.getCurrentPosition(
				position => setLat(position.coords.latitude),
				error => setError(error.message)
			),
		[]
	);
	const renderContent = () => {
		if (!lat && errorMessage) return <h3>Error:{errorMessage} </h3>;

		if (lat && !errorMessage) return <Season lat={lat} />;

		return <Loader message="Detecting your location. You may need to grant permission..." />;
	};
	return <div className="parent">{renderContent()}</div>;
};

// class App extends React.Component {
// 	state = { lat: null, error: '' };

// 	componentDidMount() {
// 		window.navigator.geolocation.getCurrentPosition(
// 			position => {
// 				this.setState({ lat: position.coords.latitude });
// 			},
// 			error => this.setState({ error: error.message })
// 		);
// 	}

// 	renderContent() {
// 		if (!this.state.long && this.state.error) return <h3>Error:{this.state.error} </h3>;
// 		console.log(this.state.lat); //19.075984

// 		if (this.state.lat && !this.state.error) return <Season lat={this.state.lat} />;

// 		return <Loader message="Detecting your location. You may need to grant permission..." />;
// 	}
// 	render() {
// 		return <div className="parent">{this.renderContent()}</div>;
// 	}
// }

ReactDOM.render(<App />, document.getElementById('root'));
