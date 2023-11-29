let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    total += price;

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    // Populate cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.itemName} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    // Update total
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    // In a real-world scenario, you'd likely send the cart data to a server for processing
    alert(`Checkout complete! Total: $${total.toFixed(2)}`);
    
    // Reset the cart
    cart = [];
    total = 0;
    
    // Update the cart display
    updateCartDisplay();
}
