import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import Season from './Season';
import useLocation from './useLocation';

const App = () => {
	const { lat, errorMessage } = useLocation();
	const renderContent = () => {
		if (!lat && errorMessage) return <h3>Error:{errorMessage} </h3>;

		if (lat && !errorMessage) return <Season lat={lat} />;

		return <Loader message="Detecting your location. You may need to grant permission..." />;
	};
	return <div className="parent">{renderContent()}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
