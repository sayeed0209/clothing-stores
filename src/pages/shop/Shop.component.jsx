import React from 'react';
import { SHOP_DATA } from './shop.data';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
const Shop = () => {
	return (
		<div className="shop-page">
			{SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default Shop;
