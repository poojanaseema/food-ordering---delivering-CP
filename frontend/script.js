// LOGIN

const loginForm = document.querySelector("form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {

            alert("Please enter Email and Password");
            return;

        }

        alert("Login Successful! Welcome to Foodie 🍔");

        window.location.href = "home.html";

    });

}




const cartButtons = document.querySelectorAll(".food-card button");

cartButtons.forEach(function(button) {

    button.onclick = function() {

        const foodCard = button.closest(".food-card");

        const foodName = foodCard.querySelector("h3").textContent;

        const prices = foodCard.querySelectorAll("h3");

        const foodPrice = parseInt(
            prices[prices.length - 1].textContent.replace("₹", "")
        );

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: foodName,
            price: foodPrice
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(foodName + " added to cart! 🛒");

    };

});







function displayCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) {
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        total = total + item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });

    document.getElementById("cartTotal").textContent = total;
}

displayCart();


function checkout() {

    window.location.href = "checkout.html";

}




const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const payment = document.getElementById("payment").value;

        alert(
            "Order Placed Successfully! 🎉\n\n" +
            "Customer: " + name + "\n" +
            "Payment: " + payment
        );

        localStorage.removeItem("cart");
        window.location.href="order.html";


    });

}