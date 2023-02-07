import React from 'react';
import './checkout.items.styles.scss';
import {
	removeItemFromCartAction,
	decrementItemFromCartAction,
	addToCartAction,
} from '../../redux/cart/cartAction';
import { connect } from 'react-redux';
const CheckoutItem = ({
	item,
	removeItem,
	decrementOrRemoveCartItem,
	incrementCartItem,
}) => {
	const { id, name, imageUrl, price, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => decrementOrRemoveCartItem(item)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => incrementCartItem(item)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}€</span>
			<div className="remove-button" onClick={() => removeItem(item)}>
				&#10006;
			</div>
		</div>
	);
};
const mapDispatchToProps = dispatch => ({
	removeItem: cartItems => {
		return dispatch(removeItemFromCartAction(cartItems));
	},
	decrementOrRemoveCartItem: cartItems =>
		dispatch(decrementItemFromCartAction(cartItems)),
	incrementCartItem: cartItems => dispatch(addToCartAction(cartItems)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
