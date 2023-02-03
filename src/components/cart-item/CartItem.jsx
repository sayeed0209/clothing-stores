import React from 'react';
import './cart.item.styles.scss';
const CartItem = ({ cartItem }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	return (
		<div className="cart-item">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span>
					{quantity} * {price}€
				</span>
			</div>
		</div>
	);
};

export default CartItem;
