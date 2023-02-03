
let carrito = [];
let section = document.getElementById("productos");
let carro = JSON.parse(localStorage.getItem("carroLocalSt")); 


if(carro === null){
}else{
    carrito = carro;
    for(let producto of carrito){
        document.getElementById("listaCarrito").innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>  
            </tr>
        `;
        let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
        document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
    }
}

function tarjetaProducto(){
    for(const producto of productos){
        section.innerHTML += `
            <div class="card" style="width: 22rem;">
                <img class="card-img-top p-2" src="${producto.foto}" alt="Card image">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.marca}</p>
                    <p class="card-text">${producto.origen}</p>
                    <p class="card-text">${producto.abv}</p>
                    <h5 class="card-text">$ ${producto.precio} CLP</h5>
                    <button id="btn${producto.id}" class="btn btn-warning">Agregar <i class="bi bi-cart-plus"></i></button>
                </div>
            </div>
        `;
    }
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
        agregarCarro(producto);
        });
    });
}

function agregarCarro(productoEnCarro){
    carrito.push(productoEnCarro);
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carroLocalSt", carritoJson);
    Toastify({
        text: productoEnCarro.nombre+" ha sido agregado al carrito ",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    document.getElementById("listaCarrito").innerHTML += `
        <tr id="fila${productoEnCarro.id}" class="tablaCarrito">
            <td>${productoEnCarro.nombre}</td>
            <td>${productoEnCarro.precio}</td>
            </tr>
            `;
            let totalCarrito = carrito.reduce(( acumulador, prod )=> acumulador + prod.precio,0);
            document.getElementById("total").innerText = "Total $: "+ totalCarrito +" CLP";
            
        }
{/* <td><button id="btn${productoEnCarro.id}" class="btn btn-danger"><i class="bi bi-x-circle"></i></button></td> */}


let comprarCarrito = document.getElementById("comprarCarrito");
comprarCarrito.onclick = () => {
    let nombreUsuario = prompt("Ingrese nombre:");          
    let timerInterval
    Swal.fire({
    title: nombreUsuario + " tu compra se ha realizado con éxito",
    html: "redirigiendo...",
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
        localStorage.clear();
        carrito=[];
        document.location.reload();
    }
    }).then((result) => {    
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
}

let vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.onclick = () => {
    localStorage.clear();
    carrito=[];
    document.location.reload();
}

tarjetaProducto();