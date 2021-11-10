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
    articulosBox.innerHTML += `<div class="card m-2 shadow p-3 mb-5 bg-body rounded col-sm-6 col-md-4 col-lg-3 col-xl-3.2 col-xxl-2">
            <img src="${element.imagen}" class="card-img-top img-thumbnail" style="max-height:15rem; object-fit: scale-down;" alt="${element.nombre}">
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="d-flex flex-column justify-content-evenly">
              <h5 class="card-title">${element.nombre}</h5>
              <p class="card-text">${element.descripcion}</p>
              </div>
              <div class="d-flex flex-column justify-content-end">
              <p class="card-text">Precio: $${element.precio}</p>
              <p class="text-danger"> ${element.stock <= 5 ? "ÚLTIMAS UNIDADES!!!" : ""} </p>
              <a href="" class="btn btn-primary">Añadir al carrito</a>
              </div>
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
