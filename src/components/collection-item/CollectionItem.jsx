import React from 'react';
import './collectionItem.styles.scss';
import CustomButton from '../custom-button/CustomButton';
import { addToCartAction } from '../../redux/cart/cartAction';
import { connect } from 'react-redux';
const CollectionItem = ({ item, addToCartAction }) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${item.imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="price">{item.price}</span>
			</div>
			<CustomButton inverted onClick={() => addToCartAction(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};
const mapDispatchToProps = dispatch => ({
	addToCartAction: product => dispatch(addToCartAction(product)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
