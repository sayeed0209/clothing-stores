import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { cartToggleAction } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
const CartIcon = ({ cartToggleAction, cartItemsCount }) => {
	return (
		<div className="cart-icon" onClick={cartToggleAction}>
			<ShoppingBag className="shopping-icon" />
			<span className="item-count">{cartItemsCount}</span>
		</div>
	);
};
const mapDispatchToProps = dispatch => ({
	cartToggleAction: () => dispatch(cartToggleAction()),
});
const mapStateToProps = state => {
	return { cartItemsCount: selectCartItemsCount(state) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
