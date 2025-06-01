function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('item_list')) || [];

    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;  // Increase quantity
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('item_list', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
}
