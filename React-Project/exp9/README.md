# Experiment 9 – Person Class Hierarchy

An object-oriented JavaScript exercise demonstrating **ES6 class inheritance**.  
This builds on earlier experiments that introduced DOM updates and React components, but shifts the focus toward **modeling related concepts** with a base class and specialized subclasses.

---

## 🎯 Objective
- Practice creating a reusable **parent class** (`Person`)  
- Extend it into **subclasses** (`Student`, `Teacher`)  
- Learn how to use:
  - `super()` for constructor chaining
  - Shared methods (`getInfo()`)
  - Method overriding (`getFullDetails()`)

---

## 📂 Project Structure
Experiment-9/
├── index.html # Markup: container, list, detail panel
├── styles.css # Styling for layout and list
├── script.js # Class definitions, objects, DOM rendering
└── README.md # Documentation (this file)


---

## 🧩 Core Classes
```js
class Person {
  constructor(name, age) { this.name = name; this.age = age; }
  getInfo() { return `${this.name} (Age: ${this.age})`; }
  getFullDetails() { return this.getInfo(); }
}

class Student extends Person {
  constructor(name, age, course) { super(name, age); this.course = course; }
  getFullDetails() { return `${this.getInfo()}\nRole: Student\nCourse: ${this.course}`; }
}

class Teacher extends Person {
  constructor(name, age, subject) { super(name, age); this.subject = subject; }
  getFullDetails() { return `${this.getInfo()}\nRole: Teacher\nSubject: ${this.subject}`; }
}

🔄 How It Works

Create Student and Teacher objects in an array people.

Render a list of names with View buttons.

When a button is clicked, call getFullDetails() for that instance.

Show the details (with role-specific info) in a panel.

Flow:
Define classes → create objects → render list → user clicks → show details

📊 Key Concepts Demonstrated
Concept	Example Used
Base class	Person
Inherited properties	name, age reused
Constructor chaining	super() in subclasses
Method reuse	getInfo() called inside getFullDetails()
Method overriding	Specialized getFullDetails()
📸 UI Preview

People list with names and View buttons

Details box showing selected person’s info

(Styling provided in styles.css — clean card-like design with borders and spacing.)

🚀 Running the Project

Open the folder Experiment-9 in VS Code.

Right-click index.html → Open with Live Server (if you have the extension), or open it directly in your browser.

Click View next to a name to see the details update.

🔧 Possible Extensions

Add new subclasses (e.g., Staff, Guest)

Add a shared method like celebrateBirthday() to increment age

Add an input form to create new people dynamically

Rebuild the project in React with state and props

Use TypeScript to enforce stronger typing

📝 Takeaways

Inheritance reduces repetition by centralizing shared properties/methods.

Overriding enables specialization while keeping shared logic intact.

Keep classes focused on data and behavior — leave UI rendering to separate functions.