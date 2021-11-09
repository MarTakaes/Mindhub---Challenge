let endpoint = `https://apipetshop.herokuapp.com/api/articulos`

let init = {
    method: "GET",
}

fetch(endpoint, init)
    .then(res => res.json())
    .then(data => {
        const articulos = data.response;
        console.log(articulos)
    })