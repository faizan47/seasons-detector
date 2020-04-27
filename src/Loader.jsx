import React from 'react';

const Loader = ({ message }) => {
	return (
		<div className="ui active dimmer">
			<div className="ui text loader">{message}</div>
		</div>
	);
};
Loader.defaultProps = {
	message: 'Hello'
};

export default Loader;
