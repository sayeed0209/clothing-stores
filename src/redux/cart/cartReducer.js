import { cartTypeAction } from './cartTypes';
import { addToCart, decrementItemAndRemove, removeItem } from './cart.utils';
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
		case cartTypeAction.DECREMENT_CART_ITEM:
			return {
				...state,
				cartItems: decrementItemAndRemove(state.cartItems, action.payload),
			};
		case cartTypeAction.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItem(state.cartItems, action.payload),
			};
		case cartTypeAction.CLEAR_ALL_CART_ITEMS:
			return { ...state, cartItems: [] };
		default:
			return state;
	}
};
