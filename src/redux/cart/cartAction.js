import { cartTypeAction } from './cartTypes';
export const cartToggleAction = () => {
	return { type: cartTypeAction.TOGGLE_CART_DROPDOWN };
};
