function limpiar() {
  document.getElementById("mi-formulario").reset;
}

function suma() {
  let num1 = parseInt(document.getElementById("valor-1").value);
  let num2 = parseInt(document.getElementById("valor-2").value);
  document.getElementById("el-resultado").innerHTML = num1 + num2;
}

function resta() {
  let num1 = parseInt(document.getElementById("valor-1").value);
  let num2 = parseInt(document.getElementById("valor-2").value);
  document.getElementById("el-resultado").innerHTML = num1 - num2;
}

function multiplicar() {
  let num1 = parseInt(document.getElementById("valor-1").value);
  let num2 = parseInt(document.getElementById("valor-2").value);
  document.getElementById("el-resultado").innerHTML = num1 * num2;
}

function dividir() {
  let num1 = parseInt(document.getElementById("valor-1").value);
  let num2 = parseInt(document.getElementById("valor-2").value);
  document.getElementById("el-resultado").innerHTML = num1 / num2;
}

const botonCalcular = document.getElementById("calcular");

console.log(botonCalcular);

botonCalcular.addEventListener("click", (event) => {
  const selectOperacion = document.getElementById("select-op");

  switch (selectOperacion.value) {
    case "Suma":
      return suma();
    case "Resta":
      return resta();
    case "Multiplicación":
      return multiplicar();
    case "División":
      return dividir();
  }
});
