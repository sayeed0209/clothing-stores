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
