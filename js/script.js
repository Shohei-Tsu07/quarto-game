const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        cells.forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected'); 
    });
});