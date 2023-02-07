export const addToCart = (cartItems, cartItemToAdd) => {
	const findExistingItem = cartItems.find(item => item.id === cartItemToAdd.id);

	if (findExistingItem) {
		return cartItems.map(item => {
			if (item.id === cartItemToAdd.id) {
				let quantity = item.quantity + 1;
				return { ...item, quantity: quantity };
			} else {
				return item;
			}
		});
	} else {
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
	}
};

export const removeItem = (cartItems, cartItemToRemove) => {
	return cartItems.filter(item => item.id !== cartItemToRemove.id);
};

export const decrementItemAndRemove = (cartItems, cartItemToDecrement) => {
	const findExistingItem = cartItems.find(
		item => item.id === cartItemToDecrement.id
	);

	if (findExistingItem.quantity === 1) {
		return removeItem(cartItems, cartItemToDecrement);
	}
	return cartItems.map(item => {
		if (item.id === cartItemToDecrement.id) {
			return { ...item, quantity: item.quantity - 1 };
		} else {
			return item;
		}
	});
};
