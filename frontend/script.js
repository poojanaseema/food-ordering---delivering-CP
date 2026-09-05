// LOGIN

const loginForm = document.querySelector("form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
        const role = document.getElementById("role").value;

        if (email === "" || password === "") {

            alert("Please enter Email and Password");
            return;

        }

        if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
}
if (!/^[A-Z]/.test(password)) {
    alert("Password must start with a capital letter");
    return;
}
if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one number");
    return;
}
if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain at least one special character");
    return;
}

fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: email,
        password: password,
        role: role
    })
})
.then(response => response.json())
.then(data => {

    alert(data.message);

    if (role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "home.html";
    }

})
.catch(error => {
    console.error(error);
    alert("Backend connection failed!");
});

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