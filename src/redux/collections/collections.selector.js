import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
const MAPPED_KEYS = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};
const selectCollection = state => state.collections;

export const selectCollectionsItems = createSelector(
	[selectCollection],
	collection => collection.shop_data
);
export const selectCollectionsPreviewItems = createSelector(
	[selectCollectionsItems],
	collection => Object.keys(collection).map(key => collection[key])
);
export const selectSingleCollection = memoize(urlParams =>
	createSelector(
		[selectCollectionsItems],
		collectionsItems => collectionsItems[urlParams]
	)
);
