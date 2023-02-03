import { cartTypeAction } from './cartTypes';
export const cartToggleAction = () => {
	return { type: cartTypeAction.TOGGLE_CART_DROPDOWN };
};
export const addToCartAction = product => {
	return { type: cartTypeAction.ADD_TO_CART, payload: product };
};
