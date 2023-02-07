import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHiddenDropdown } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to="/signin" className="option">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHiddenDropdown,
});
export default connect(mapStateToProps)(Header);
