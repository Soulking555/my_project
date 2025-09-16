 📚 Experiment 8 – Library Management UI (React)

An interactive React app to manage a simple library of books.  
This experiment builds on **Experiment 7 (static components)** by introducing **React state, controlled inputs, and dynamic list rendering**.

---

## 🎯 Objective
- Understand how React re-renders UI when **state** changes.  
- Practice **controlled inputs**, **filtering arrays**, and **removing/adding items**.  
- Compare static rendering (Exp 7) vs. dynamic state updates (Exp 8).  

---

## 🧩 Features
- 🔍 **Search** books by title or author (instant filtering)  
- ➕ **Add** a new book (title + author)  
- ❌ **Remove** a book from the list  
- 📜 Conditional rendering → shows *"No books match"* when search returns empty  

---

## ⚛️ React Concepts Used
- `useState` for multiple independent pieces of state  
- Controlled inputs (`value` + `onChange`)  
- Array methods: `filter`, `map`  
- Conditional rendering (`books.length === 0 ? ...`)  
- One-way data flow: **state → UI**  

---

## 📂 File Structure
```
Experiment-8/
├── index.html
├── src/
│   ├── main.jsx        # Entry / mount
│   ├── App.jsx         # Library UI logic
│   ├── App.css         # Basic layout styles
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Setup & Run
```bash
npm install
npm run dev
```

Then open the local dev server link in your browser.

---

## 📖 Learning Highlights
- Practice multiple pieces of React state  
- Understand controlled inputs and form handling  
- Render lists dynamically with `map`  
- Use `filter` for search and deletion logic  
- Immutable state updates in React  

---

## 🚀 Next Steps (Optional Enhancements)
- Persist books in `localStorage`  
- Add form validation (e.g., empty fields warning)  
- Highlight search matches in results  
- Add sorting (title/author)  
- Inline editing of existing books  
