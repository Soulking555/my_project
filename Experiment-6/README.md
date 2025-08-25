# Experiment 5: Interactive SVG Drawing Tool

## Title
Freehand Drawing Application using SVG and Mouse Events

---

## Objective
To implement a browser-based freehand drawing tool using **SVG (Scalable Vector Graphics)** and **JavaScript event handling**.  
The goal is to understand:
- How SVG can be manipulated dynamically using JavaScript.
- How mouse events (`mousedown`, `mousemove`, `mouseup`) can be used to create interactive graphics.
- How to generate and update `<path>` elements for freehand drawing.

---

## Theory

### 1. What is SVG?
SVG (Scalable Vector Graphics) is an XML-based markup language for describing 2D graphics. Unlike raster graphics (PNG/JPEG), SVG images are resolution-independent and can be scaled without losing quality.

Key elements:
- `<svg>`: Defines the SVG canvas.
- `<path>`: Defines a shape consisting of a series of points and curves. A path is described using **commands** like:
  - `M x y` → Move to point (x, y).
  - `L x y` → Draw a straight line from current point to (x, y).

### 2. Why use SVG for drawing?
- SVG provides pixel-perfect precision and scalability.
- Paths can represent complex freehand strokes.
- JavaScript can dynamically manipulate SVG elements.

### 3. Mouse Events in JavaScript
- **mousedown** → Triggered when the user presses the mouse button. Used here to start drawing a new path.
- **mousemove** → Triggered when the user moves the mouse. Used to update the path with new line segments.
- **mouseup** → Triggered when the user releases the mouse button. Used to stop drawing.

---

## Components of the Experiment

### 1. HTML (`exp5.html`)
- Contains the **canvas area** implemented with `<svg>` where the user draws.
- Links external CSS for styling and JavaScript for functionality.
- Minimal UI with a heading and a bordered container.

### 2. CSS (`exp5.css`)
- Styles the page with proper margins, fonts, and borders.
- Defines the size and background of the SVG canvas.
- Changes cursor to **crosshair** for better drawing experience.

### 3. JavaScript (`exp5.js`)
Handles the **logic for freehand drawing**:
1. **Start Drawing (`mousedown`)**
   - Creates a new `<path>` element inside the SVG.
   - Initializes the path with `M x y` (move to starting point).
2. **Draw (`mousemove`)**
   - If the mouse is pressed, keeps appending `L x y` (line to) commands to the path.
   - This simulates continuous freehand drawing.
3. **Stop Drawing (`mouseup` / `mouseleave`)**
   - Ends the current stroke.
   - Prepares for the next independent stroke.

### 4. README (`README.md`)
- Provides experiment details, working steps, and expected output.

---

## Procedure

1. **Setup**
   - Open VS Code and create a folder named `Experiment-5`.
   - Inside the folder, create the following files:
     - `exp5.html`
     - `exp5.css`
     - `exp5.js`
     - `README.md`

2. **Write the Code**
   - Copy the given HTML, CSS, and JavaScript code into their respective files.

3. **Run the Experiment**
   - Open `exp5.html` in a browser (preferably using VS Code **Live Server**).
   - A canvas area will be displayed with the title **SVG Drawing Tool**.

4. **Perform Drawing**
   - Click and hold the mouse inside the SVG area.
   - Move the mouse to draw freehand strokes.
   - Release the mouse to stop drawing.
   - Repeat to create multiple strokes (letters, shapes, etc.).

---

## Working of Code (Step by Step)

1. **HTML Structure**
   - A heading `<h2>` gives the title.
   - A `<div>` container holds the SVG canvas.
   - `<svg>` acts as the drawing board.

2. **CSS Styling**
   - The SVG is styled with borders, light background, and padding.
   - Cursor changes to crosshair to simulate a drawing tool.

3. **JavaScript Execution**
   - When user clicks (`mousedown`), `startDrawing()` creates a new `<path>` with stroke color = blue and stroke-width = 2px.
   - The first mouse coordinate initializes the path with `M x y`.
   - As user moves (`mousemove`), new coordinates are added with `L x y`, extending the path dynamically.
   - On releasing (`mouseup`), drawing stops, finalizing the stroke.

---

## Output

- The tool enables freehand drawing in the browser.
- Users can draw text, shapes, or freehand sketches (e.g., "ByteXL" as shown in the example).
- Multiple strokes are possible without clearing previous ones.

---

## Advantages

1. Easy to implement using just HTML, CSS, and JavaScript.
2. Provides understanding of **event-driven programming**.
3. Demonstrates **dynamic manipulation of SVG elements**.
4. Extensible – features like color palette, brush size, undo/redo, and saving drawings can be added.

---

## Result

The experiment successfully demonstrates how to build a **freehand SVG drawing tool** using mouse events.  
The user can interactively draw on the canvas, achieving results similar to a simple paint/doodle tool.
