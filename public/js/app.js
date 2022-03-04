//frontend
const carro = [];
const objetoCompras = {};
const pintarElementosCarrito = document.getElementById('frutasCarro');
const cantidadProductos = document.getElementById('cantidad');
const finalizaCompra = document.getElementById('finalizar');


document.addEventListener("click", (e) => {
    //console.log(e.target.dataset.bsTarget === "#exampleModal");
    if(e.target.dataset.bsTarget === "#exampleModal") {
        console.log(first)
        //console.log(cantidadProductos.value);
        //console.log(e.target.dataset.fruta);
        carro.push({cantidad: cantidadProductos.value, producto: e.target.dataset.fruta})
        //carro.push(e.target.dataset.fruta);
        e.target.classList.add("disabled");
        pintarElementoEnHTML();
        console.log(carro);
    }
});


const pintarElementoEnHTML = () => {
    //console.log(carro);
    pintarElementosCarrito.innerHTML = '';
    cantidadProductos.value.innerHTML = '';
    //cantidadProductos.innerHTML = '';
    carro.forEach((fruta) => {
        pintarElementosCarrito.innerHTML+= `<li>${fruta.producto}, Cantidad = ${fruta.cantidad}</li>`
    })
};


finalizaCompra.addEventListener("click", (e) => {
    window.location.href = "/";
});
