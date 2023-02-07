import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './cart.dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import { cartToggleAction } from '../../redux/cart/cartAction';
const CartDropdown = ({ cartItems, dispatch }) => {
	const navigate = useNavigate();
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					navigate('/checkout');
					dispatch(cartToggleAction());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		cartItems: selectCartItems(state),
	};
};

export default connect(mapStateToProps)(CartDropdown);
