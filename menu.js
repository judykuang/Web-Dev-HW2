function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Shopping Cart Array
let cart = [];

//Add Item to Cart
function addToCart(itemName, itemPrice, itemQuantity) {
  cart.push({ name: itemName, price: itemPrice, quantity: itemQuantity });
  updateCart();
}

//Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

//Clear Cart
function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  const totalSpan = document.getElementById('total');
  
  cartDiv.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <p>${item.quantity} ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">Remove</button></p>
    `;
    total += item.price;
  });

  totalSpan.textContent = total.toFixed(2);
}
