import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import './cart.dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart items">
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};
const mapStateToProps = ({ cart: { cartItems } }) => {
	return {
		cartItems: cartItems,
	};
};

export default connect(mapStateToProps)(CartDropdown);
