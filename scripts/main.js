function detectarCinco(array) {
    array.forEach(element => {
        if (element.stock <= 5) {
            console.log(element.nombre)
        }
    });
}

function filtrarElementos(lista) {
    let tipo = document.title.includes('Juguetes') ? "Juguete" : "Medicamento"
    lista.forEach(element => {
        if(tipo === element.tipo){
            renderizarCartas(element)
            console.log('primer if')
        }
    });
}

function renderizarCartas(element) {
    let articulosBox = document.querySelector(".articulos_box")
    articulosBox.innerHTML += `<div class="card m-2 shadow p-3 mb-5 bg-body rounded" style="width: 18rem; ">
            <img src="${element.imagen}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body ">
              <h5 class="card-title">${element.nombre}</h5>
              <p class="card-text">${element.descripcion}</p>
              <p class="card-text">Precio: $${element.precio}</p>
              <p class="card-text">Stock: ${element.stock}</p>
              <a href="" class="btn btn-primary">Comprar</a>
            </div>
          </div>`
}


let endpoint = `https://apipetshop.herokuapp.com/api/articulos`

let init = {
    method: "GET",
}

fetch(endpoint, init)
    .then(res => res.json())
    .then(data => {
        const articulos = data.response;
        filtrarElementos(articulos)
        detectarCinco(articulos)
    })

