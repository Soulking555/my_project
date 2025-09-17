# 📚 Experiment – ProductCard Component Using Props (React)

A simple React app to practice **props** by creating a reusable product card component.  
This experiment demonstrates how React components can dynamically render different data passed from a parent component.

---

## 🎯 Objective
- Understand how to **pass props** to React components.  
- Build a **reusable component** (`ProductCard`) that can display different product details without modifying its code.  
- Compare static HTML vs. **dynamic React rendering** using props.  

---

## 🧩 Features
- 🛒 **Reusable card** → works for any product (name, price, status)  
- 💲 Displays **product price** dynamically  
- 📦 Shows **stock status** (In Stock / Out of Stock)  
- 🎨 Styled with basic CSS card layout  

---

## ⚛️ React Concepts Used
- **Props** (`{ name, price, status }`)  
- **Reusable components**  
- **Parent → child communication** in React  
- **One-way data flow**: props drive UI rendering  

---

## 📂 File Structure
ProductCard-Experiment/
├── index.html
├── src/
│   ├── index.js        # React entry point
│   ├── App.js          # Uses ProductCard with multiple products
│   ├── ProductCard.js  # Reusable component (props)
│   └── App.css         # Basic styles
├── package.json
└── README.md



---

## 🛠️ Setup & Run
1. Clone or download this directory  
2. Install dependencies  
   ```bash
   npm install
3. Start the development server
    ```bash
    npm start
4. Open http://localhost:3000/ in your browser

## 📖 Learning Highlights

1. Difference between hardcoding data vs. passing via props
2. Creating reusable UI components
3. Understanding parent → child communication in React