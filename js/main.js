function detectarCinco(array) {
    array.forEach(element => {
        if (element.stock <= 5) {
            console.log(element.nombre)
        }
    });
}

let endpoint = `https://apipetshop.herokuapp.com/api/articulos`

let init = {
    method: "GET",
}

fetch(endpoint, init)
    .then(res => res.json())
    .then(data => {
        const articulos = data.response;
        filtrarArticulo(articulos)
        detectarCinco(articulos)
    })