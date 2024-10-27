// task 2 Configure the JavaScript for Drawing Context
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

// Function to start drawing
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

// Function to draw shapes
canvas.addEventListener('mousemove', (event) => {
    if (isDrawing = true) return;

    const tool = document.querySelector('input[name="tool"]').value;
    const color = document.getElementById('color-picker').value;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    
    if (tool === 'line') {
        drawLine(startX, startY, event.offsetX, event.offsetY);
    } else if (tool === 'rectangle') {
        drawRect(startX, startY, event.offsetX, event.offsetY);
    } else if (tool === 'circle') {
        drawCircle(startX, startY, event.offsetX, event.offsetY);
    }
});

// Function to stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
// Task 3 Implement Shape Drawing Logic
// this is to draw a line
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// this is to draw a rectangle
function drawRect(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.rect(x1,y1,x2 - x1,y2 - y1);
    ctx.stroke();
}
// this is to draw a circle
function drawCircle(x1,y1,) {
    ctx.beginPath();
    ctx.arc(x1,y1, 0, 0, Math.PI * 2);
    ctx.stroke();
}
// task 4 Add Color Selection and Canvas Clearing
// this is to clear the canvas
