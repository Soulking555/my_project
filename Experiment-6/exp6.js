// Convert client coordinates to SVG coordinates
function toSvgPoint(svg, clientX, clientY){
  const pt = svg.createSVGPoint();
  pt.x = clientX; pt.y = clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

const svg = document.getElementById('svgCanvas');
const modeEl = document.getElementById('mode');
const strokeColorEl = document.getElementById('strokeColor');
const strokeWidthEl = document.getElementById('strokeWidth');
const undoBtn = document.getElementById('undo');
const clearBtn = document.getElementById('clear');
const shapeCountEl = document.getElementById('shapeCount');

let drawing = false;
let current = null;
let start = {x:0,y:0};
const shapes = [];

function updateShapeCount(){
  shapeCountEl.textContent = shapes.length + ' shapes';
}

svg.addEventListener('mousedown', (e) => {
  if (e.button !== 0) return; // left click only
  drawing = true;
  const p = toSvgPoint(svg, e.clientX, e.clientY);
  start.x = p.x; start.y = p.y;
  const stroke = strokeColorEl.value;
  const sw = strokeWidthEl.value;

  if (modeEl.value === 'rect'){
    const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x', start.x);
    rect.setAttribute('y', start.y);
    rect.setAttribute('width', 0);
    rect.setAttribute('height', 0);
    rect.setAttribute('fill','transparent');
    rect.setAttribute('stroke', stroke);
    rect.setAttribute('stroke-width', sw);
    svg.appendChild(rect);
    current = rect;
  } else {
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', start.x);
    line.setAttribute('y1', start.y);
    line.setAttribute('x2', start.x);
    line.setAttribute('y2', start.y);
    line.setAttribute('stroke', stroke);
    line.setAttribute('stroke-width', sw);
    svg.appendChild(line);
    current = line;
  }
  e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
  if (!drawing || !current) return;
  const p = toSvgPoint(svg, e.clientX, e.clientY);
  if (current.tagName === 'rect'){
    let x = Math.min(start.x, p.x);
    let y = Math.min(start.y, p.y);
    let w = Math.abs(p.x - start.x);
    let h = Math.abs(p.y - start.y);

    if (e.shiftKey){ // constrain to square
      const s = Math.max(w,h);
      w = h = s;
      if (p.x < start.x) x = start.x - s;
      if (p.y < start.y) y = start.y - s;
    }

    current.setAttribute('x', x);
    current.setAttribute('y', y);
    current.setAttribute('width', w);
    current.setAttribute('height', h);
  } else if (current.tagName === 'line'){
    current.setAttribute('x2', p.x);
    current.setAttribute('y2', p.y);
  }
});

window.addEventListener('mouseup', () => {
  if (!drawing) return;
  drawing = false;
  if (!current) return;

  // Validate shape size
  const keep = (() => {
    if (current.tagName === 'rect'){
      const w = parseFloat(current.getAttribute('width'));
      const h = parseFloat(current.getAttribute('height'));
      return (w > 1 && h > 1);
    } else if (current.tagName === 'line'){
      const x1 = parseFloat(current.getAttribute('x1'));
      const y1 = parseFloat(current.getAttribute('y1'));
      const x2 = parseFloat(current.getAttribute('x2'));
      const y2 = parseFloat(current.getAttribute('y2'));
      return Math.hypot(x2-x1, y2-y1) > 2;
    }
    return false;
  })();

  if (!keep){
    current.remove();
  } else {
    shapes.push(current);
  }
  current = null;
  updateShapeCount();
});

// Undo
undoBtn.addEventListener('click', () => {
  const last = shapes.pop();
  if (last && last.parentNode) last.parentNode.removeChild(last);
  updateShapeCount();
});

// Clear
clearBtn.addEventListener('click', () => {
  while (shapes.length){
    const s = shapes.pop();
    if (s.parentNode) s.parentNode.removeChild(s);
  }
  updateShapeCount();
});

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z'){
    e.preventDefault(); undoBtn.click();
  }
});

svg.addEventListener('keydown', (e) => {
  if (e.key === 'Delete' || e.key === 'Backspace'){
    clearBtn.click();
  }
});

updateShapeCount();
svg.style.touchAction = 'none';
