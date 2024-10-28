// Load cart items from local storage
function loadCart() {
    var cartContainer = document.getElementById('cart-container');
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var totalPriceElement = document.getElementById('total-price');
    let total = 0;


    // Clear cart container
    cartContainer.innerHTML = '';

    // Display items in cart
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartContainer.style.color='grey';
        cartContainer.style.fontSize='2em';
        cartContainer.style.textAlign='center';
        cartContainer.style.marginTop='20%'
        totalPriceElement.innerHTML = '';
    } else {
        cartItems.forEach(item => {
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');

            // Calculate total price
            total += item.price;  

         itemDiv.innerHTML = 
         '<img src="' + item.imgSrc + '" alt="" width="100">'+
         '<h2>' + item.title + '</h2>' +
         '<p>Size: ' + item.size + '</p>' +
         '<p>Price: $' + item.price.toFixed(2) + '</p>' +
         '<button onclick="removeFromCart(\'' + item.id + '\')">Remove</button>';

            cartContainer.appendChild(itemDiv);
        });
        // Display total price
        totalPriceElement.innerHTML = 'Total Price: $' + total.toFixed(2);
    }
}

// Remove item from cart
function removeFromCart(id) {
    var cartItem = JSON.parse(localStorage.getItem('cart')) || [];
    cartItem = cartItem.filter(item => item.id != id);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    loadCart(); // Reload cart
}

// Clear entire cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

// On page load, load the cart
window.onload = loadCart;