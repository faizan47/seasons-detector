import { useState, useEffect } from 'react';

export default () => {
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
	return { lat, errorMessage };
};
