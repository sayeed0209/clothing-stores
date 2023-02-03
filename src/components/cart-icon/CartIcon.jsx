import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { cartToggleAction } from '../../redux/cart/cartAction';
const CartIcon = ({ cartToggleAction }) => {
	return (
		<div className="cart-icon" onClick={cartToggleAction}>
			<ShoppingBag className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};
const mapDispatchToProps = dispatch => ({
	cartToggleAction: () => dispatch(cartToggleAction()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
