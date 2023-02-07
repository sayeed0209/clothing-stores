import React from 'react';
import './custom-button-styles.scss';
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	clearAll,
	...otherProps
}) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} ${clearAll ? 'clear-all-btn' : ''} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
