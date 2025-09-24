# CLI Employee Management System Using Node.js and Arrays

## 📌 Objective

The purpose of this experiment is to **build an interactive Command-Line
Interface (CLI) application** using **Node.js** that manages a list of
employees in memory.\
This strengthens your understanding of: - Basic **Node.js
programming**. - Handling **user input** interactively. - Performing
**array operations** (add, list, remove).

------------------------------------------------------------------------

## 🗂️ Project Structure

    cli-employee-management/
    │── package.json
    │── main.js          # Main program file
    │── README.md        # Project documentation

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1. Initialize Node.js project

``` bash
mkdir cli-employee-management
cd cli-employee-management
npm init -y
```

### 2. Create `main.js`

This will contain the code for the employee management system.

------------------------------------------------------------------------

## 🚀 Running the Application

``` bash
node main.js
```

You will see a **menu** in the terminal to add, list, and remove
employees interactively.

------------------------------------------------------------------------

## 🛠️ Application Features

### 1. **Add Employee**

-   Prompts the user for **name** and **ID**.
-   Stores employee in an array.

### 2. **List Employees**

-   Displays all employees stored in the array.

### 3. **Remove Employee**

-   Prompts for **ID**.
-   Deletes employee with that ID from the array.

### 4. **Exit**

-   Exits the CLI program.

------------------------------------------------------------------------

## 🧩 Example Code (`main.js`)

``` javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Employee array
let employees = [];

// Show menu
function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");

  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addEmployee();
        break;
      case "2":
        listEmployees();
        break;
      case "3":
        removeEmployee();
        break;
      case "4":
        console.log("Exiting... Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice! Try again.");
        showMenu();
    }
  });
}

// Add Employee
function addEmployee() {
  rl.question("Enter Employee Name: ", (name) => {
    rl.question("Enter Employee ID: ", (id) => {
      employees.push({ name, id });
      console.log("Employee added successfully!");
      showMenu();
    });
  });
}

// List Employees
function listEmployees() {
  if (employees.length === 0) {
    console.log("No employees found!");
  } else {
    console.log("\nEmployee List:");
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. Name: ${emp.name}, ID: ${emp.id}`);
    });
  }
  showMenu();
}

// Remove Employee
function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      console.log("Employee removed successfully!");
    } else {
      console.log("Employee not found!");
    }
    showMenu();
  });
}

// Start program
showMenu();
```

------------------------------------------------------------------------

## 📖 Experiment Explanation

-   **Node.js** provides built-in modules (`readline`) to handle user
    input.
-   Employees are stored in a simple **JavaScript array**.
-   **Menu-driven design** lets users select options repeatedly until
    exit.
-   No external storage is used → all data lives in memory during the
    session.

------------------------------------------------------------------------

## ✅ Learning Outcomes

By completing this experiment, you will: 1. Understand **interactive CLI
programming** in Node.js. 2. Learn how to use **readline** for
input/output. 3. Practice **array operations** (`push`, `forEach`,
`findIndex`, `splice`). 4. Build a foundation for more advanced **CLI
tools and backend logic**.
