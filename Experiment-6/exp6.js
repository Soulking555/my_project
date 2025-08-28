// --------- setup (document object only) ----------
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

// HiDPI crispness: match backing store to devicePixelRatio
(function scaleForHiDPI () {
  var dpr = window.devicePixelRatio || 1;

  // current CSS size
  var cssWidth  = parseInt(getComputedStyle(canvas).width, 10);
  var cssHeight = parseInt(getComputedStyle(canvas).height, 10);

  canvas.width  = Math.floor(cssWidth  * dpr);
  canvas.height = Math.floor(cssHeight * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // so drawing uses CSS pixel coords
})();

// brush style (blue, thin, rounded)
ctx.strokeStyle = '#1e90ff';
ctx.lineWidth   = 2;
ctx.lineCap     = 'round';
ctx.lineJoin    = 'round';

// state
var drawing = false;

// mouse helpers (client → canvas coords)
function pos(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

// --------- mouse events only ----------
canvas.addEventListener('mousedown', function (e) {
  drawing = true;
  var p = pos(e);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);     // start stroke
  e.preventDefault();
});

canvas.addEventListener('mousemove', function (e) {
  if (!drawing) return;
  var p = pos(e);
  ctx.lineTo(p.x, p.y);     // extend stroke
  ctx.stroke();             // render incrementally for smoothness
});

document.addEventListener('mouseup', function () {
  if (!drawing) return;
  drawing = false;
  ctx.closePath();          // finish the current stroke
});

// optional: if cursor leaves canvas while drawing, stop
canvas.addEventListener('mouseleave', function () { drawing = false; });
