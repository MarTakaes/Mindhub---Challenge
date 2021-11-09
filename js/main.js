let endpoint = `https://apipetshop.herokuapp.com/api/articulos`

let init = {
    method: "GET"
}

function renderizarCartas(lista) {
    let juguetesBox = document.querySelector(".juguetes_box")
    lista.forEach(element => {
        if(element.tipo === 'Juguete'){
            juguetesBox.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body">
              <h5 class="card-title">${element.nombre}</h5>
              <p class="card-text">${element.descripcion}</p>
              <p class="card-text">Precio: $${element.precio}</p>
              <p class="card-text">Stock: ${element.stock}</p>
              <a href="" class="btn btn-primary">Comprar</a>
            </div>
          </div>`
        }

    });
}

fetch(endpoint, init)
    .then(res => res.json())
    .then(data => {
        const articulos = data.response;
        renderizarCartas(articulos)
    })


