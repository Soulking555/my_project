const svg = document.getElementById("drawingArea");
let isDrawing = false;
let currentPath = null;

svg.addEventListener("mousedown", startDrawing);
svg.addEventListener("mousemove", draw);
svg.addEventListener("mouseup", stopDrawing);
svg.addEventListener("mouseleave", stopDrawing);

function startDrawing(event) {
  isDrawing = true;

  const { x, y } = getMousePosition(event);

  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("stroke-width", "2");
  currentPath.setAttribute("fill", "none");
  currentPath.setAttribute("d", `M ${x} ${y}`);

  svg.appendChild(currentPath);
}

function draw(event) {
  if (!isDrawing) return;

  const { x, y } = getMousePosition(event);
  let d = currentPath.getAttribute("d");
  d += ` L ${x} ${y}`;
  currentPath.setAttribute("d", d);
}

function stopDrawing() {
  isDrawing = false;
  currentPath = null;
}

function getMousePosition(event) {
  const rect = svg.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
