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
<<<<<<< HEAD
    articulosBox.innerHTML += `<div class="container d-flex card m-2 shadow p-3 mb-5 bg-body rounded" style="width: 20rem; ">
            <img src="${element.imagen}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body ">
=======
    articulosBox.innerHTML += `<div class="card m-2 shadow p-3 mb-5 bg-body rounded col-sm-6 col-md-4 col-lg-3 col-xl-3.2 col-xxl-2">
            <img src="${element.imagen}" class="card-img-top img-thumbnail" style="max-height:15rem; object-fit: scale-down;" alt="${element.nombre}">
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="d-flex flex-column justify-content-evenly">
>>>>>>> b5de9016a050ba78c24810cdcbc675dfa94a2560
              <h5 class="card-title">${element.nombre}</h5>
              <p class="card-text">${element.descripcion}</p>
              </div>
              <div class="d-flex flex-column justify-content-end">
              <p class="card-text">Precio: $${element.precio}</p>
<<<<<<< HEAD
              <p class="text-danger"> ${element.stock <= 5 ? "ÚLTIMAS UNIDADES!!!" : ""} </p> 
              <p class="card-text">Stock: ${element.stock}</p>
              <a href="" class="btn btn-primary">Comprar</a>
=======
              <p class="text-danger"> ${element.stock <= 5 ? "ÚLTIMAS UNIDADES!!!" : ""} </p>
              <a href="" class="btn btn-primary">Añadir al carrito</a>
              </div>
>>>>>>> b5de9016a050ba78c24810cdcbc675dfa94a2560
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

