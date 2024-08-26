const tiendaContent = document.getElementById("tiendaContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1, nombre: "Motherboard",
        precio: 100000, cantidad: 1,
    },

    {
        id: 2, nombre: "Procesador",
        precio: 150000, cantidad: 1,
    },

    {
        id: 3, nombre: "memoriasRams",
        precio: 80000, cantidad: 1,
    },

    {
        id: 4, nombre: "Fuentes",
        precio: 90000, cantidad: 1,
    },

    {
        id: 5, nombre: "Gpu",
        precio: 3000000, cantidad: 1,
    }
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <p class="prince">${product.precio}<p>
    `;

    tiendaContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);


    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {

            carrito.push({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        saveLocal();
    });
});

const saveLocal = () => {
localStorage.setItem("carrito",JSON.stringify (carrito));
};

JSON.parse(localStorage.getItem("carrito"));