import React from 'react';
import './Season.css';

const getSeason = (lat, month) => {
	if (month >= 3 && month <= 8) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};
const seasionConfig = {
	summer: {
		message: 'It is summer',
		iconName: 'sun',
		theme: 'warm'
	},
	winter: {
		message: 'It is winter',
		iconName: 'snowflake',
		theme: 'cool'
	}
};

const Season = ({ lat }) => {
	const season = getSeason(lat, new Date().getMonth());
	const { message, iconName, theme } = seasionConfig[season];
	return (
		<div className={`season ${theme}`}>
			<i className={`left massive icon ${iconName}`} />
			<h2>{message}</h2>
			<i className={`right massive icon ${iconName}`} />
		</div>
	);
};

export default Season;
