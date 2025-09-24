# REST API for Playing Card Collection Using Express.js

## 📌 Objective

The goal of this experiment is to **build a RESTful API** using
**Express.js** to manage a simple collection of playing cards.\
Through this task, you will learn: - How to set up an Express.js
server. - How to create RESTful API endpoints. - How to handle HTTP
methods (`GET`, `POST`, `DELETE`). - How to manage data in an
**in-memory array** (no database).

------------------------------------------------------------------------

## 🗂️ Project Structure

    playing-card-api/
    │── package.json
    │── server.js          # Main Express.js server file
    │── README.md          # Project documentation

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1. Initialize Node.js project

``` bash
mkdir playing-card-api
cd playing-card-api
npm init -y
```

### 2. Install dependencies

``` bash
npm install express
```

### 3. Create `server.js`

This file will contain your Express.js server and API routes.

------------------------------------------------------------------------

## 🚀 Running the Server

``` bash
node server.js
```

By default, the server will start at:

    http://localhost:3000

------------------------------------------------------------------------

## 🛠️ API Endpoints

### 1. **List all cards**

**Request**

``` http
GET /cards
```

**Response**

``` json
[
  { "id": 1, "suit": "Hearts", "value": "A" },
  { "id": 2, "suit": "Spades", "value": "10" }
]
```

------------------------------------------------------------------------

### 2. **Add a new card**

**Request**

``` http
POST /cards
Content-Type: application/json

{
  "suit": "Diamonds",
  "value": "K"
}
```

**Response**

``` json
{
  "message": "Card added successfully",
  "card": { "id": 3, "suit": "Diamonds", "value": "K" }
}
```

------------------------------------------------------------------------

### 3. **Get a specific card by ID**

**Request**

``` http
GET /cards/2
```

**Response**

``` json
{ "id": 2, "suit": "Spades", "value": "10" }
```

If the card does not exist:

``` json
{ "error": "Card not found" }
```

------------------------------------------------------------------------

### 4. **Delete a card by ID**

**Request**

``` http
DELETE /cards/1
```

**Response**

``` json
{ "message": "Card deleted successfully" }
```

If the card does not exist:

``` json
{ "error": "Card not found" }
```

------------------------------------------------------------------------

## 🧩 Example Code (`server.js`)

``` javascript
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In-memory array for cards
let cards = [];
let idCounter = 1;

// Get all cards
app.get("/cards", (req, res) => {
  res.json(cards);
});

// Add new card
app.post("/cards", (req, res) => {
  const { suit, value } = req.body;
  if (!suit || !value) {
    return res.status(400).json({ error: "Suit and value are required" });
  }
  const newCard = { id: idCounter++, suit, value };
  cards.push(newCard);
  res.json({ message: "Card added successfully", card: newCard });
});

// Get card by ID
app.get("/cards/:id", (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).json({ error: "Card not found" });
  res.json(card);
});

// Delete card by ID
app.delete("/cards/:id", (req, res) => {
  const index = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Card not found" });
  cards.splice(index, 1);
  res.json({ message: "Card deleted successfully" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

------------------------------------------------------------------------

## 📖 Experiment Explanation

-   **REST API**: An architecture style that uses HTTP methods to
    manipulate resources.
-   **Express.js**: A minimal Node.js framework for building APIs.
-   **In-Memory Array**: The card collection is stored in a simple
    JavaScript array (data will reset when the server restarts).
-   **HTTP Methods**:
    -   `GET` → Retrieve resources (cards).
    -   `POST` → Create new resources.
    -   `DELETE` → Remove resources.
-   **Route Parameters**: Example: `/cards/:id` → Access a specific card
    by ID.
-   **JSON Responses**: All responses follow JSON format for
    consistency.

------------------------------------------------------------------------

## ✅ Learning Outcomes

-   You will understand how to:
    1.  Set up and run a basic **Express.js server**.
    2.  Design **RESTful routes** for CRUD operations.
    3.  Use **HTTP methods** effectively (`GET`, `POST`, `DELETE`).
    4.  Work with **in-memory data structures** in Node.js.
    5.  Test APIs using tools like **Postman** or `curl`.
