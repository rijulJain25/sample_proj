let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const discountMessageElement = document.getElementById("discount-message");

function displayCartItems() {
    cartItemsContainer.innerHTML = ""; 
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `<h5>${item.name}</h5><span>$${item.price}</span>`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;

    if (cart.length > 3) {
        const discount = totalPrice * 0.2;
        totalPrice -= discount;
        discountMessageElement.textContent = `You get a 20% discount of $${discount.toFixed(2)}!`;
    } else {
        discountMessageElement.textContent = "";
    }

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
displayCartItems();
