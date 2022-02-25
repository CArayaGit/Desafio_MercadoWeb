//frontend
const carro = [];
const pintarElementosCarrito = document.getElementById('frutasCarro');
const cantidadProductos = document.getElementById('cantidad');

document.addEventListener("click", (e) => {
    //console.log(e.target.dataset.bsTarget === "#exampleModal");
    if(e.target.dataset.bsTarget === "#exampleModal") {
        //console.log(cantidadProductos.value);
        //console.log(e.target.dataset.fruta);
        carro.push(e.target.dataset.fruta);
        e.target.classList.add("disabled");
        pintarElementoEnHTML();
    }
});

const pintarElementoEnHTML = () => {
    //console.log(carro);
    pintarElementosCarrito.innerHTML = '';
    //cantidadProductos.value.innerHTML = '';
    carro.forEach((fruta) => {
        pintarElementosCarrito.innerHTML+= `<li>${fruta}</li>`
        //pintarElementosCarrito.innerHTML+= `<li>${fruta}, Cantidad = ${cantidadProductos.value}</li>`
    })
};

