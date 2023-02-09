import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { Outlet } from 'react-router-dom';

const Shop = () => {
	return (
		<>
			<div className="shop-page">
				<CollectionOverview />
				<Outlet />
			</div>
		</>
	);
};

export default Shop;
