function filtrarElementos(lista) {
  let tipo = document.title.includes("Juguetes") ? "Juguete" : "Medicamento";
  lista.forEach((element) => {
    if (tipo === element.tipo) {
      renderizarCartas(element);
    }
  });
}

function renderizarCartas(element) {
  if (
    document.title == "Pet-Shop Franco | Farmacia" ||
    document.title == "Pet-Shop Franco | Juguetes"
  ) {
    let articulosBox = document.querySelector(".articulos_box");
    articulosBox.innerHTML += `<div class="card m-2 shadow p-3 mb-5 bg-body rounded col-sm-6 col-md-4 col-lg-3 col-xxl-3">
                  <img src="${element.imagen}" class="card-img-top img-thumbnail" style="max-height:15rem; object-fit: scale-down;" alt="${element.nombre}">
                  <div class="card-body d-flex flex-column justify-content-between align-items-start get-title">
                      <div  class="d-flex flex-column justify-content-evenly">
                         <h5 id="div" class="card-title">${element.nombre}</h5>
                         <p><a class="btn" style="color:rgba(123, 68, 61)" data-bs-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample">Descripción</a></p><div class="collapse" id="collapseExample">
                        <div>${element.descripcion}</div>
                     </div>
                      
                  </div>
                  <div class="d-flex flex-column justify-content-end">
                      <p class="card-text">Precio: $${element.precio}</p>
                      <p class="text-danger text-center"> ${element.stock <= 5 ? "ÚLTIMAS UNIDADES!!!" : ""} </p>
                      <label for="${element._id}"> Cantidad <input type = "number" id = "${element._id}" value="1" class="text-center contador"></label>
                      
                      
                  </div>
                  <div class="d-flex justify-content-center w-100"><a href="#/" id="btnadd" class="addToCart">Añadir al carrito</a></div>
                  </div>
                  </div>`;
  }
}

function renderizarCarro() {
  let carritoBox = document.querySelector(".carrito-box");
  let keys = Object.keys(localStorage);
  let carro = [];
  keys.forEach((key) => carro.push(JSON.parse(localStorage.getItem(key))[0]));
  carro.length == 0
    ? (carritoBox.innerHTML = `<p>No hay artículos que mostrar</p>`)
    : (carritoBox.innerHTML = ``);
  carro.forEach((e) => {
    carritoBox.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${e.imagen}" class="img-fluid rounded-start" alt="${e.nombre}">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${e.nombre}</h5>
              <p class="card-text">$${e.precio}</p>                   
            </div>
          </div>
          <div class="col-1 d-flex justify-content-end pt-2 pe-3" >
            <span type="button" style="width:2px; height:2px" class="btn-close delete-element"></span>       
          </div>
        </div>
    </div> 
    `;
  });
}

function checkoutButtons() {
  let irCheckout = document.querySelector(".ir-checkout");
  let vaciarCarrito = document.querySelector(".vaciar-carrito");
  vaciarCarrito.addEventListener("click", (e) => {
    localStorage.clear();
  });
}


function abrirAlertaPopup(boton, activar, close) {
  if (document.title == "Pet-Shop Franco | Contacto") {
    boton.addEventListener("click", (e) => {
      console.log("clikea");
      activar.style.visibility = "visible";
    });

    close.addEventListener("click", (e) => {
      abrirPopup.style.visibility = "hidden";
    });
  }
}

function saveLocal(array) {
  localStorage.setItem("carro", JSON.stringify(array));
}
function script(data) {
  const articulos = data.response;
  filtrarElementos(articulos);
  const agregarAlCarrito = document.querySelectorAll(".addToCart");
  agregarAlCarrito.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", (a) => {
      let elementName =
        addToCartButton.closest(".get-title").children[0].firstElementChild
          .innerHTML;

      let selectedElement = articulos.filter(
        (articulo) => articulo.nombre == elementName
      );
      localStorage.setItem(elementName, JSON.stringify(selectedElement));
      keys = Object.keys(localStorage);
      badgeSpan.innerHTML = keys.length;
    });
  });
  cartButton.addEventListener("click", (e) => {
    renderizarCarro();
    var buttonCloseList = document.querySelectorAll(".delete-element");
    buttonCloseList.forEach((span) => {
      span.addEventListener("click", (evento) => {
        let elementoABorrar =
          span.closest(".row").children[1].children[0].firstElementChild
            .innerHTML;
        evento.target.parentElement.parentElement.parentElement.remove();
        localStorage.removeItem(elementoABorrar);
        keys = Object.keys(localStorage);
        badgeSpan.innerHTML = keys.length;
      });
    });
  });
}

checkoutButtons();

let badgeSpan = document.querySelector(".badge");
let cartButton = document.querySelector(".shopping-cart");
let keys = Object.keys(localStorage);
badgeSpan.innerHTML = keys.length;
let abrirPopup = document.getElementById("popup");
let popUp = document.getElementById("btnAbrirPopup");
let cerrar = document.getElementById("btnCerrarPopup");

abrirAlertaPopup(popUp, abrirPopup, cerrar);
// Fetch
let endpoint = `https://apipetshop.herokuapp.com/api/articulos`;

let init = {
  method: "GET",
};

fetch(endpoint, init)
  .then((res) => res.json())
  .then((data) => script(data))
  .catch((err) => console.log(err.message));
