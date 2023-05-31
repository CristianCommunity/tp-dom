const tarjetas = [{
    titulo: "Bootstrap",
    descripcion: "Es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web",
    imagen: "/ejercicio-2/images/bootstrap.png"
}, 
{
    titulo: "Css",
    descripcion: "Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado",
    imagen: "/ejercicio-2/images/css.png",
},
{
    titulo: "JavaScript",
    descripcion: "es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico",
    imagen: "/ejercicio-2/images/js.png",
}]

let card = document.getElementById("mi-cards");

tarjetas.map((x) =>{
    card.innerHTML += `
    <div class="col">
    <div class="card">
      <img src="${x.imagen}" class="card-img-top" alt="${x.titulo}">
      <div class="card-body">
        <h5 class="card-title text-center text-primary">${x.titulo}</h5>
        <p class="card-text">${x.descripcion}</p>
      </div>
    </div>
  </div>
    `
}

)

