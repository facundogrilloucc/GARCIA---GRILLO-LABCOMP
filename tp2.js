let cartCount = 0;
let carrito = [];


function addToCart(btn) {
    // Obtener el título y el precio del álbum
    const albumDiv = btn.closest('.divalbums');
    const titulo = albumDiv.querySelector('.tituloalbum').textContent;
    const precioTexto = albumDiv.querySelector('.precio').textContent.replace('$', '').replace(',', '.');
    const precio = parseFloat(precioTexto);

    // Añadir al carrito
    carrito.push({ titulo, precio });
    cartCount++;
    document.getElementById('contadorcarrito').textContent = cartCount;

    // Feedback del Añadido al carrito
    btn.innerHTML = '✓ Añadido';
    btn.style.backgroundColor = '#10B981';
    setTimeout(() => {
        btn.innerHTML = 'Añadir al carrito';
        btn.style.backgroundColor = '#7C3AED';
    }, 2000);

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';

    let total = 0;
    carrito.forEach((item, idx) => {
        total += item.precio;
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '0.5rem';
        li.innerHTML = `
            <span>${item.titulo} <span style="color:#7C3AED;">$${item.precio.toFixed(2)}</span></span>
            <button onclick="eliminarDelCarrito(${idx})" class="botoneliminarcarrito">X</button>
        `;
        carritoLista.appendChild(li);
    });

    // Mostrar el total
    const totalLi = document.createElement('li');
    totalLi.style.marginTop = '1rem';
    totalLi.style.fontWeight = 'bold';
    totalLi.style.justifyContent = 'flex-end';
    totalLi.style.display = 'flex';
    totalLi.innerHTML = `Total: <span style="color:#7C3AED;margin-left:8px;">$${total.toFixed(2)}</span>`;
    carritoLista.appendChild(totalLi);
}

function eliminarDelCarrito(idx) {
    carrito.splice(idx, 1);
    cartCount--;
    document.getElementById('contadorcarrito').textContent = cartCount;
    actualizarCarrito();
}

document.getElementById('carrito-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.getElementById('desplegar-carrito');
    if (modal.classList.contains('activo')) {
        modal.classList.remove('activo');
        setTimeout(() => { modal.style.display = 'none'; }, 300); // espera la transición
    } else {
        modal.style.display = 'block';
        setTimeout(() => { modal.classList.add('activo'); }, 10); // hace la transición
    }
});

function cerrarCarrito() {
    const modal = document.getElementById('desplegar-carrito');
    modal.classList.remove('activo');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}
