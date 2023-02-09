import React from 'react';
import './collection.styles.scss';
import { useParams } from 'react-router-dom';
import { selectSingleCollection } from '../../redux/collections/collections.selector';
import { useSelector } from 'react-redux';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
const CollectionPage = () => {
	const params = useParams();
	const collection = useSelector(state =>
		selectSingleCollection(params.collectionID)(state)
	);
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => (
					<CollectionItem item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;
