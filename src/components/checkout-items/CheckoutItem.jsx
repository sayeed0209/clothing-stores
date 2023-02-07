import React from 'react';
import './checkout.items.styles.scss';
const CheckoutItem = ({ item }) => {
	console.log(item);
	const { id, name, imageUrl, price, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="name">{quantity}</span>
			<span className="name">{price}</span>
			<div className="remove-button">&#10006;</div>
		</div>
	);
};

export default CheckoutItem;
