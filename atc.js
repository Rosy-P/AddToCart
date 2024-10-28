var additemid = 0;

function addtocart(item) {
    additemid += 1;

    // Get item details
    var imgSrc = item.children[0].currentSrc;
    var title = item.children[1].innerText;
    var size = item.children[2].children[1].value;
    var price = parseFloat(item.getAttribute('data-price'));

    // Create a cart item object
    var cartItem = {
        id: additemid,
        imgSrc: imgSrc,
        title: title,
        size: size,
        price: price
    };

    // Get cart from local storage or initialize a new one
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new item to cart
    cart.push(cartItem);

    // Store updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Optionally, redirect to the cart page
    // window.location.href = 'cart.html';
}
