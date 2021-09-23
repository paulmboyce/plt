const DEFAULT_CART = {
	total: 0.0,
	items: {},
	numItems: 0,
};

class Cart {
	constructor(items = [{ productId: "", price: 0, quantity: 0 }]) {
		this.items = items;
	}
}

export default Cart;
