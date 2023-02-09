import React from 'react';
import './collection.overview.styles.scss';
import PreviewCollection from '../preview-collection/PreviewCollection';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreviewItems } from '../../redux/collections/collections.selector';
import { connect } from 'react-redux';
const CollectionOverview = ({ shop_data }) => {
	return (
		<div className="collection-overview">
			{shop_data.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	shop_data: selectCollectionsPreviewItems,
});
export default connect(mapStateToProps)(CollectionOverview);
