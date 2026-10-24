const mod = document.getElementById('element-mod');
const closeBTN = document.querySelector('.closeBTN');
document.querySelectorAll('.element').forEach(tile => {tile.addEventListener('click', () => {
        
    document.getElementById('mod-name').textContent = tile.dataset.name;
    document.getElementById('mod-symbol').textContent = tile.dataset.symbol;
    document.getElementById('mod-number').textContent = tile.dataset.number;
    document.getElementById('mod-rating').textContent = tile.dataset.rating;

    document.getElementById('mod-category').textContent = tile.dataset.category;
    document.getElementById('mod-uses').textContent = tile.dataset.uses;
    document.getElementById('mod-facts').textContent = tile.dataset.facts;
    document.getElementById('mod-image').src = tile.dataset.image;
    mod.classList.add('open');


    });
});
    closeBTN.addEventListener('click', (event) => {
            mod.classList.remove('open');
        });
    window.addEventListener('click', (event) => {
                if(event.target === mod){
                    mod.classList.remove('open');
                }
    });
