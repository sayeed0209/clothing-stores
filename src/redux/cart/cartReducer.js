import { cartTypeAction } from './cartTypes';
import { addToCart } from './cart.utils';
const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypeAction.TOGGLE_CART_DROPDOWN:
			return { ...state, hidden: !state.hidden };
		case cartTypeAction.ADD_TO_CART:
			return {
				...state,
				cartItems: addToCart(state.cartItems, action.payload),
			};

		default:
			return state;
	}
};
