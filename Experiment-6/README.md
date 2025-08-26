# Experiment 5: Interactive Canvas Drawing Tool

## Title
Freehand Drawing Application using HTML5 Canvas and Mouse Events

---

## Objective
To implement a **browser-based freehand drawing tool** using the **Canvas API** and **JavaScript mouse events**.  
The goal is to understand:
- How the `<canvas>` element can be manipulated using JavaScript.
- How mouse events (`mousedown`, `mousemove`, `mouseup`) allow real-time drawing.
- How to render and update strokes dynamically without refreshing the page.

---

## Theory

### 1. What is Canvas?
The HTML5 `<canvas>` element provides a **bitmap-based drawing surface** that can be controlled using JavaScript.  
It is resolution-dependent and suited for dynamic graphics, animations, and freehand drawing.

Key methods from the **Canvas 2D API**:
- `beginPath()` → Starts a new drawing path.
- `moveTo(x, y)` → Moves the cursor to position (x, y).
- `lineTo(x, y)` → Draws a straight line from the current point to (x, y).
- `stroke()` → Renders the outline of the path.

### 2. Why Canvas for Drawing?
- Provides pixel-level control for freehand graphics.
- Lightweight and efficient for continuous rendering.
- Works well with mouse/touch events.

### 3. Mouse Events in JavaScript
- **mousedown** → Triggered when the mouse button is pressed; starts a new stroke.
- **mousemove** → Triggered when the mouse moves; used to draw continuously while pressing.
- **mouseup** → Triggered when the button is released; stops the stroke.
- **mouseleave** → Triggered when the mouse leaves the canvas; ensures the drawing stops.

---

## Components of the Experiment

### 1. HTML (`exp5.html`)
- Contains the `<canvas>` element that serves as the drawing board.
- Links external CSS for styling and JavaScript for drawing logic.
- Simple UI with a heading and bordered canvas.

### 2. CSS (`exp5.css`)
- Defines the size, border, and background of the canvas.
- Sets cursor to **crosshair** for better drawing interaction.

### 3. JavaScript (`exp5.js`)
Implements the **drawing logic**:
1. **Start Drawing (`mousedown`)**
   - Begins a new path.
   - Moves cursor to the starting position.
   - Activates drawing mode.
2. **Draw (`mousemove`)**
   - If in drawing mode, keeps adding `lineTo(x, y)` commands.
   - Continuously strokes lines to simulate freehand drawing.
3. **Stop Drawing (`mouseup` / `mouseleave`)**
   - Ends the current path.
   - Turns off drawing mode.

### 4. README (`README.md`)
- Contains experiment details, steps, and explanation of code working.

---

## Procedure

1. **Setup**
   - Open VS Code and create a folder named `Experiment-5`.
   - Inside the folder, create:
     - `exp5.html`
     - `exp5.css`
     - `exp5.js`
     - `README.md`

2. **Write the Code**
   - Place HTML, CSS, and JS code in respective files.

3. **Run the Experiment**
   - Open `exp5.html` in a browser.
   - A canvas area will appear under the heading **Canvas Drawing Tool**.

4. **Perform Drawing**
   - Click and drag inside the canvas to draw.
   - Release the mouse to stop drawing.
   - Repeat for multiple strokes.

---

## Working of Code (Step by Step)

1. **HTML**
   - Defines `<canvas>` with an ID to target via JavaScript.
   - Provides a title and container.

2. **CSS**
   - Sets canvas size (e.g., 600×400px).
   - Adds border and background color.
   - Crosshair cursor for drawing.

3. **JavaScript**
   - Gets 2D rendering context: `canvas.getContext('2d')`.
   - Uses flags (`isDrawing`) to track if mouse is pressed.
   - On `mousedown`: starts path and moves to cursor.
   - On `mousemove`: draws line to new position, strokes path.
   - On `mouseup`/`mouseleave`: ends drawing.

---

## Output

- The application allows **freehand drawing** on the canvas.
- Users can create letters, shapes, or sketches.
- Multiple strokes are supported without clearing previous drawings.

---

## Advantages

1. Simple and efficient drawing mechanism using **Canvas API**.
2. Introduces **event-driven programming**.
3. Demonstrates **real-time graphics rendering**.
4. Can be extended to add features like:
   - Brush colors and sizes.
   - Eraser tool.
   - Save drawing as image.

---

## Result

The experiment successfully demonstrates how to build a **freehand drawing tool** using the **HTML5 Canvas element** and **mouse events**.  
Users can interactively draw on the canvas, similar to a digital notepad or paint tool.
