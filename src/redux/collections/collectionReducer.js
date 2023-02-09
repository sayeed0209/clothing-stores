import { SHOP_DATA } from './shop_data';

const INITIAL_STATE = {
	shop_data: SHOP_DATA,
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
