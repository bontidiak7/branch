document.getElementById('calculateBtn').addEventListener('click', function() {
    const aInput = document.getElementById('halmazA').value;
    const bInput = document.getElementById('halmazB').value;
    const muvelet = document.getElementById('muvelet').value;

    const a = window.halmazBeolvas(aInput);
    const b = window.halmazBeolvas(bInput);
    let result = [];

    if (muvelet === 'egyesites') {
        result = window.egyesites(a, b);
    } else if (muvelet === 'metszet') {
        result = window.metszet(a, b);
    } else if (muvelet === 'kulonseg') {
        result = window.kulonseg(a, b);
    }

    document.getElementById('eredmeny').textContent = `Eredmény: {${result.join(', ')}}`;
    drawVenn(a, b, result, muvelet);
});


function drawVenn(a, b, result, muvelet) {
    const canvas = document.getElementById('vennCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.5;
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(140, 100, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(260, 100, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.fillText('A', 100, 90);
    ctx.fillText('B', 300, 90);
    ctx.font = '14px Arial';
    ctx.fillText(`A: {${a.join(', ')}}`, 30, 190);
    ctx.fillText(`B: {${b.join(', ')}}`, 230, 190);
    ctx.fillText(`Eredmény: {${result.join(', ')}}`, 120, 40);
}