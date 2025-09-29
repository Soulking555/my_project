# 📘 Course Search Experiment (React + Vite)

This project is a **simple React application** that demonstrates how to:
- Display a list of courses (`id`, `coursename`, `duration`).
- Add a **search bar** to filter courses by name in real time.
- Use modern React (`useState`) and basic list rendering.
- Style the app with **Tailwind CSS** (or fallback to your own CSS).

---

## 🚀 Features
- **Search as you type** – instant filtering of course list.
- **Responsive layout** – grid adapts to mobile, tablet, and desktop.
- **Clean cards** – each course is displayed inside a styled card.
- **Fallback message** – shows *“No courses found”* if search has no results.
- **Easy customization** – replace the static data with API calls or JSON.

---

## 📂 Project Structure
```
my-courses-app/
 ├─ index.html               # Root HTML file
 ├─ package.json             # Dependencies and scripts
 ├─ vite.config.js           # Vite configuration
 ├─ tailwind.config.js       # Tailwind config (if used)
 └─ src/
     ├─ main.jsx             # Entry point, renders App
     ├─ App.jsx              # Main component with search logic
     └─ index.css            # Styles (Tailwind or custom CSS)
```

---

## 🛠️ Setup & Installation

### 1. Create a Vite React project
```bash
npm create vite@latest my-courses-app
cd my-courses-app
npm install
```

### 2. Install Tailwind CSS (optional but recommended)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update **`tailwind.config.js`**:
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Replace **`src/index.css`** with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Replace starter code
Copy the provided `App.jsx`, `main.jsx`, and `index.html` into your project.

---

## ▶️ Running the App
Start the development server:
```bash
npm run dev
```
Visit **http://localhost:5173** (default Vite port).

---

## 🧩 How It Works
1. The app maintains a state variable `search` for the input text.
2. On each keystroke, `setSearch` updates the state.
3. The `filteredCourses` array is computed by checking if each `coursename` includes the search string.
4. React re-renders the list dynamically with only matching courses.

---

## 📖 Example Data
```js
const coursesData = [
  { id: 1, coursename: "Computer Architecture", duration: "3 months" },
  { id: 2, coursename: "Data Structures", duration: "2 months" },
  { id: 3, coursename: "Operating Systems", duration: "4 months" },
  { id: 4, coursename: "Machine Learning", duration: "6 months" },
  { id: 5, coursename: "Database Systems", duration: "3 months" },
];
```

---

## 🛠️ Possible Extensions
- 🔍 Add **debounce** to search (prevent filtering on every keystroke).
- 🌟 Highlight the matched part of course names.
- 📡 Fetch courses from an API or JSON file instead of hardcoding.
- 🧭 Add sorting (by name, duration).
- 🎨 Replace Tailwind with pure CSS if desired.

---

## 📜 License
This experiment is free to use for learning and educational purposes.
