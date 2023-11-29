let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    total += price;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.itemName} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });
    

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Checkout complete! Total: $${total.toFixed(2)}`);

    cart = [];
    total = 0;

    updateCartDisplay();
}
