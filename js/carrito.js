const pintarCarrito = ()  => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.innerHTML = `
    <h1>Carro</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "borrarCarro";
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append (modalbutton);

    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.innerHTML = `
    <h3> ${product.nombre}</h3>
    <p> ${product.precio} $<p>
    <p>Cantidad: ${product.cantidad}</p>  
    `;

    modalContainer.append(carritoContent);

    let eliminar = document.createElement("span");
    eliminar.innerText = ("X");
    eliminar.className = ("delete-product");
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) =>  acc + el.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const encontraId = carrito.find((element) => element.id);

    carrito = carrito.filter((carroId) => {
        return carroId !== encontraId;
    });

    pintarCarrito();
};