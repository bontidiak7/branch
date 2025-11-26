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