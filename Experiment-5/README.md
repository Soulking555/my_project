# Dynamic Product Filter with Dropdown using JavaScript DOM Manipulation

## 📌 Title  
Dynamic Product Filter with Dropdown using JavaScript DOM Manipulation  

---

## 🎯 Objective  
To build a web-based product list that can dynamically filter and display items based on the user’s selection from a dropdown menu. The experiment demonstrates how to use **JavaScript DOM manipulation** for updating elements in real time without reloading the page.  

---

## 🛠️ Project Structure  

exp5/
│── exp5.html # HTML structure
│── exp5.css # Styling
│── exp5.js # JavaScript logic
│── README.md # Documentation


---

## 🛠️ Steps Performed  

1. **Created the HTML file (`exp5.html`):**  
   - Added a title (`Product List`) and a dropdown filter menu.  
   - Created categories: *All*, *Clothing*, *Electronics*, *Books*.  
   - Defined products inside `<ul>` using `<li>` elements, each with a `data-category`.  

2. **Created the CSS file (`exp5.css`):**  
   - Styled the container, dropdown, and product list.  
   - Made list items visually distinct with borders and padding.  

3. **Created the JavaScript file (`exp5.js`):**  
   - Selected dropdown and product list items using DOM methods.  
   - Added an event listener to track changes in the dropdown.  
   - Implemented filtering logic using `data-category`.  

---

## 🧩 Code Explanation  

### **HTML (exp5.html)**  
Dropdown menu and product list:  
```html
<select id="category">
  <option value="all">All</option>
  <option value="clothing">Clothing</option>
  <option value="electronics">Electronics</option>
  <option value="books">Books</option>
</select>

<ul id="product-list">
  <li data-category="clothing">T-Shirt</li>
  <li data-category="clothing">Jeans</li>
  <li data-category="electronics">Headphones</li>
  <li data-category="electronics">Smartphone</li>
  <li data-category="books">Novel</li>
  <li data-category="books">Cookbook</li>
</ul>
```

CSS
```CSS
#product-list li {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
}
```

JavaScript (exp5.js)

```javascript
const categorySelect = document.getElementById("category");
const products = document.querySelectorAll("#product-list li");

categorySelect.addEventListener("change", function () {
  const selectedCategory = categorySelect.value;

  products.forEach(product => {
    if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
```
📝 Procedure

Open the exp5.html file in a web browser.

Initially, all products are displayed.

Select a category from the dropdown (Clothing, Electronics, or Books).

The product list updates instantly to display only relevant products.

Select All to reset and display all products again.

✅ Outcome

A working product filter with instant results.

Learned to:

Use data-attributes for categorization.

Handle events with JavaScript.

Dynamically update DOM elements.

🔮 Future Enhancements

Add animations (fade-in/out) for smoother filtering.

Improve CSS styling for a card/grid layout.

Include a search bar for keyword-based filtering.

Fetch products dynamically from an API instead of hardcoding.

📌 Usage in VS Code:

Open the folder in VS Code.

Keep exp5.html, exp5.css, exp5.js, and README.md in the same directory.

Use the built-in Markdown Preview (Ctrl+Shift+V or Cmd+Shift+V on Mac) to read this documentation.