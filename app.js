let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");

// Function to add items to the cart
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Function to update the cart count and display
function updateCart() {
  cartCount.textContent = cart.length;
}

// Function to toggle the cart modal
function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
  displayCartItems();
}

// Function to display cart items in the modal
function displayCartItems() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
}

// Function to close the cart modal
function closeCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = "none";
}

// Function to handle checkout
function checkout() {
  alert("Proceeding to checkout with " + cart.length + " items.");
  cart = [];
  updateCart();
  closeCart();
}
