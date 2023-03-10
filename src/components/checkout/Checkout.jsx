import React from 'react';
import './checkout.style.scss';
import {
	selectCartTotal,
	selectCartItems,
} from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../checkout-items/CheckoutItem';
import CustomButton from '../custom-button/CustomButton';
import { clearAllCartAction } from '../../redux/cart/cartAction';
import StripeButton from '../stripe-button/StripeButton';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
	'pk_live_51LrnaeCsPtOBpFVsOzyrE5EtKOqMu4kg1H2jjTFF82kzrjNNDiZv1xhQxAFD4hAlSQyeYtDbxR92KZ5MaghNquqo00H6EeIdYO'
);
const Checkout = ({ cartItems, cartTotal, clearALlItems }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(item => (
				<CheckoutItem item={item} key={item.id} />
			))}
			<div className="total">
				<span>Total: €{cartTotal}</span>
			</div>
			<CustomButton clearAll onClick={() => clearALlItems()}>
				CLEAR ALL
			</CustomButton>
			<div style={{ marginTop: '50px' }}>
				<Elements stripe={stripePromise}>
					<StripeButton />
				</Elements>
			</div>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
});
const mapDispatchToProps = dispatch => {
	return { clearALlItems: () => dispatch(clearAllCartAction()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
