function displayCart() {
    let cart = JSON.parse(localStorage.getItem('item_list')) || [];
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>Your cart is empty.</li>";
        totalPrice.textContent = "0.00";
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total.toFixed(2);
}

// Function to remove an item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('item_list')) || [];
    
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;  // Reduce quantity
    } else {
        cart.splice(index, 1);  // Remove item if quantity is 1
    }

    localStorage.setItem('item_list', JSON.stringify(cart));
    displayCart(); // Refresh cart display
}

// Run displayCart() when page loads
displayCart();
