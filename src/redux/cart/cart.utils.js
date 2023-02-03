export const addToCart = (cartItems, cartItemToAdd) => {
	const findExistingItem = cartItems.find(item => item.id === cartItemToAdd.id);

	if (findExistingItem) {
		return cartItems.map(item => {
			if (item.id === cartItemToAdd.id) {
				let count = item.count + 1;
				return { ...item, count: count };
			} else {
				return item;
			}
		});
	} else {
		return [...cartItems, { ...cartItemToAdd, count: 1 }];
	}
};
