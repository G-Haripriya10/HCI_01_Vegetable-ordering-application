// Show Home Content
function showHome() {
    document.getElementById("home-content").style.display = "block";
    document.getElementById("content").style.display = "none";
}

// Open Cart
function openCart() {
    document.getElementById("cart").style.display = "block";
}

// Close Cart
function closeCart() {
    document.getElementById("cart").style.display = "none";
}

// Product Data
const products = {
    leafy: [
        { name: "Spinach", price: 50, image: "assets/Spinach.jpg" },
        { name: "Lettuce", price: 30, image: "assets/Lettuce.jpg" },
        { name: "Kale", price: 60, image: "assets/Kale.jpg" },
        { name: "Cabbage", price: 40, image: "assets/cabbage.jpg" },
        { name: "Arugula", price: 55, image: "assets/Arugula.jpg" },
        { name: "Swiss Chard", price: 65, image: "assets/Swiss Chard.jpg" },
        { name: "Collard Greens", price: 50, image: "assets/collard_greens.jpg" },
        { name: "Mustard Greens", price: 45, image: "assets/mustard_greens.jpg" },
        { name: "Watercress", price: 70, image: "assets/watercress.jpg" },
        { name: "Bok Choy", price: 60, image: "assets/bok_choy.jpg" },
        { name: "Endive", price: 50, image: "assets/endive.jpg" },
        { name: "Spinach Baby", price: 55, image: "assets/spinach_baby.jpg" },
        { name: "Beet Greens", price: 45, image: "assets/beet_greens.jpg" },
        { name: "Chard Rainbow", price: 65, image: "assets/chard_rainbow.jpg" },
        { name: "Mache", price: 60, image: "assets/mache.jpg" },
        { name: "Dandelion Greens", price: 40, image: "assets/dandelion_greens.jpg" },
        { name: "Kale Baby", price: 55, image: "assets/kale_baby.jpg" },
        { name: "Radicchio", price: 75, image: "assets/radicchio.jpg" },
        { name: "Orach", price: 50, image: "assets/orach.jpg" },
        { name: "Tatsoi", price: 65, image: "assets/tatsoi.jpg" }
    ],
    root: [  
        { name: "Carrot", price: 40, image: "assets/carrot.jpg" },
        { name: "Beetroot", price: 35, image: "assets/beetroot.jpg" },
        { name: "Potato", price: 25, image: "assets/potato.jpg" },
        { name: "Sweet Potato", price: 50, image: "assets/sweet_potato.jpg" },
        { name: "Radish", price: 30, image: "assets/radish.jpg" },
        { name: "Turnip", price: 45, image: "assets/turnip.jpg" },
        { name: "Parsnip", price: 60, image: "assets/parsnip.jpg" },
        { name: "Rutabaga", price: 55, image: "assets/rutabaga.jpg" },
        { name: "Jicama", price: 70, image: "assets/jicama.jpg" },
        { name: "Celeriac", price: 65, image: "assets/celeriac.jpg" },
        { name: "Daikon", price: 40, image: "assets/daikon.jpg" },
        { name: "Ginger", price: 80, image: "assets/ginger.jpg" },
        { name: "Garlic", price: 30, image: "assets/garlic.jpg" },
        { name: "Onion", price: 20, image: "assets/onion.jpg" },
        { name: "Shallots", price: 35, image: "assets/shallots.jpg" },
        { name: "Leek", price: 45, image: "assets/leek.jpg" },
        { name: "Beetroot Golden", price: 65, image: "assets/beetroot_gold.jpg" },
        { name: "Kohlrabi", price: 50, image: "assets/kohlrabi.jpg" },
        { name: "Fennel", price: 60, image: "assets/fennel.jpg" }
    ],
    fruits: [
        { name: "Tomato", price: 25, image: "assets/tomato.jpg" },
        { name: "Cucumber", price: 20, image: "assets/cucumber.jpg" },
        { name: "Apple", price: 80, image: "assets/apple.jpg" },
        { name: "Banana", price: 30, image: "assets/banana.jpg" },
        { name: "Orange", price: 50, image: "assets/orange.jpg" },
        { name: "Strawberry", price: 100, image: "assets/strawberry.jpg" },
        { name: "Blueberry", price: 120, image: "assets/blueberry.jpg" },
        { name: "Pineapple", price: 90, image: "assets/pineapple.jpg" },
        { name: "Peach", price: 70, image: "assets/peach.jpg" },
        { name: "Plum", price: 60, image: "assets/plum.jpg" },
        { name: "Grapes", price: 80, image: "assets/grapes.jpg" },
        { name: "Pomegranate", price: 110, image: "assets/pomegranate.jpg" },
        { name: "Mango", price: 120, image: "assets/mango.jpg" },
        { name: "Avocado", price: 150, image: "assets/avocado.jpg" },
        { name: "Papaya", price: 75, image: "assets/papaya.jpg" },
        { name: "Watermelon", price: 50, image: "assets/watermelon.jpg" },
        { name: "Kiwi", price: 120, image: "assets/kiwi.jpg" },
        { name: "Dragon Fruit", price: 160, image: "assets/dragonfruit.jpg" },
        { name: "Lychee", price: 130, image: "assets/lychee.jpg" },
        { name: "Cherry", price: 150, image: "assets/cherry.jpg" },
        { name: "Raspberry", price: 110, image: "assets/raspberry.jpg" },
        { name: "Fig", price: 140, image: "assets/fig.jpg" },
        { name: "Apricot", price: 100, image: "assets/apricot.jpg" }
    ]
};


// Show Category
function showCategory(category) {
    const contentSection = document.getElementById("content");
    const homeContent = document.getElementById("home-content");

    // Hide home content and show category content
    homeContent.style.display = "none";
    contentSection.style.display = "block";

    // Populate category content
    const categoryProducts = products[category];
    contentSection.innerHTML = `
        <div class="category-header">
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)} Vegetables</h2>
        </div>
        <div class="product-grid">
            ${categoryProducts.map((product, index) => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}/kg</p>
                    <button onclick="addToCart('${category}', ${index})">Add to Cart</button>
                </div>
            `).join("")}
        </div>
    `;
}


// Add to Cart
const cart = [];
function addToCart(category, productIndex) {
    const product = products[category][productIndex];
    const quantity = prompt(`Enter quantity (in kg) for ${product.name}:`);
    if (quantity && !isNaN(quantity) && quantity > 0) {
        const totalCost = product.price * quantity;
        cart.push({ ...product, quantity, totalCost });
        updateCartUI();
        alert(`${product.name} added to the cart successfully!`);
    } else {
        alert("Invalid quantity entered. Please try again.");
    }
}

// Update Cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.totalCost;
        cartItemsContainer.innerHTML += `
            <li>
                ${item.name} - ${item.quantity}kg - ₹${item.totalCost}
                <button onclick="removeFromCart(${index})">Remove</button>
            </li>
        `;
    });
    cartItemsContainer.innerHTML += `<li><strong>Total Price: ₹${totalPrice}</strong></li>`;
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Toggle Search Input
// Toggle Search Bar Visibility
function toggleSearch() {
    const searchContainer = document.getElementById("search-container");
    searchContainer.style.display = searchContainer.style.display === "none" ? "block" : "none";
}

// Search Products Across All Pages
function searchProducts() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const allProducts = document.querySelectorAll(".product-card");
    allProducts.forEach(product => {
        const productName = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = productName.includes(searchQuery) ? "block" : "none";
    });
}

// Toggle Account Sidebar
function toggleAccountSidebar() {
    const sidebar = document.getElementById("account-sidebar");
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";

    // Check if the user is logged in
    const isLoggedIn = false; // Replace this with actual login status

    const userOptions = document.getElementById("user-options");

    if (isLoggedIn) {
        userOptions.innerHTML = `
            <button onclick="viewProfile()">Profile</button>
            <button onclick="openSettings()">Settings</button>
            <button onclick="logout()">Logout</button>
        `;
    } else {
        userOptions.innerHTML = `
            <button onclick="login()">Login</button>
            <button onclick="signup()">Signup</button>
        `;
    }
}

// Handle User Actions
function viewProfile() {
    alert("Viewing Profile");
}

function openSettings() {
    alert("Opening Settings");
}

function logout() {
    alert("Logging out");
    toggleAccountSidebar();
}

function login() {
    alert("Redirecting to Login");
}

function signup() {
    alert("Redirecting to Signup");
}

// Search Products Across All Pages
function searchProducts() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const allProducts = document.querySelectorAll(".product-card");
    allProducts.forEach(product => {
        const productName = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = productName.includes(searchQuery) ? "block" : "none";
    });
}

// Toggle Search Bar Visibility
function toggleSearch() {
    const searchContainer = document.getElementById("search-container");
    searchContainer.style.display = searchContainer.style.display === "none" ? "block" : "none";
}
