function filtrarArticulo(array) {
    let medicamentos = array.filter(e => e.tipo === "Medicamento")
    console.log(medicamentos)
    let juguetes = array.filter(e => e.tipo === "Juguete")
    console.log(juguetes)

    

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
    })