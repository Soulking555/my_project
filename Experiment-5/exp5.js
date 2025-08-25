// Get dropdown and product list
const categorySelect = document.getElementById("category");
const products = document.querySelectorAll("#product-list li");

// Event listener for dropdown change
categorySelect.addEventListener("change", function () {
  const selectedCategory = categorySelect.value;

  products.forEach(product => {
    if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
      product.style.display = "block"; // show item
    } else {
      product.style.display = "none"; // hide item
    }
  });
});
