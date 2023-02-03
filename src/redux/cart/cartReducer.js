import { cartTypeAction } from './cartTypes';
const INITIAL_STATE = {
	hidden: true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypeAction.TOGGLE_CART_DROPDOWN:
			return { ...state, hidden: !state.hidden };
		default:
			return state;
	}
};
