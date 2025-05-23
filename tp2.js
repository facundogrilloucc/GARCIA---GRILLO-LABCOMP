function togglePlay() {
    const btn = document.getElementById('playBtn');
    if (btn.innerHTML === '<i class="fas fa-play"></i>') {
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        btn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function addToCart(btn) {
    btn.innerHTML = '✓ Añadido';
    btn.style.backgroundColor = '#10B981';
    setTimeout(() => {
        btn.innerHTML = 'Añadir al carrito';
        btn.style.backgroundColor = '#7C3AED';
    }, 2000);
}
