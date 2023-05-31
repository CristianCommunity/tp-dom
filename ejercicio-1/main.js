let boton = document.getElementById("boton");


let p = document.getElementById("parrafo");

p.classList.toggle('textonaranja')
boton.onclick = function(){
    p.classList.toggle('textonaranja')
}
