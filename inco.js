document.querySelectorAll('.incoterm').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.tooltip').style.visibility = 'visible';
        item.querySelector('.tooltip').style.opacity = '1';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('.tooltip').style.visibility = 'hidden';
        item.querySelector('.tooltip').style.opacity = '0';
    });
});
