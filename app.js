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

