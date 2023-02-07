import { cartTypeAction } from './cartTypes';
export const cartToggleAction = () => {
	return { type: cartTypeAction.TOGGLE_CART_DROPDOWN };
};
export const addToCartAction = product => {
	return { type: cartTypeAction.ADD_TO_CART, payload: product };
};

export const removeItemFromCartAction = item => {
	return { type: cartTypeAction.REMOVE_ITEM, payload: item };
};

export const decrementItemFromCartAction = item => {
	return { type: cartTypeAction.DECREMENT_CART_ITEM, payload: item };
};
export const clearAllCartAction = () => {
	return { type: cartTypeAction.CLEAR_ALL_CART_ITEMS };
};
