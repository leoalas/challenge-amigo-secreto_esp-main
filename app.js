// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica
let participantes = [];
let ingresaAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
  let nombre = ingresaAmigo.value.trim();
  if (!nombre) {
    alert("Por favor ingrese un nombre válido");
    return;
  }
  if (!participantes.includes(nombre)) {
    participantes.push(nombre);
    actualizarLista();
    ingresaAmigo.value = "";
    resultado.innerHTML = "";
  }
}

function actualizarLista() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < participantes.length; i++) {
    let li = document.createElement("li");
    li.textContent = participantes[i];
    listaAmigos.appendChild(li);
  }
}
function sortearAmigo() {
  if (participantes.length < 2) {
    resultado.innerHTML = "<p>Debe haber al menos 2 participantes.</p>";
    return;
  }
  // Selección de un amigo al azar
  let amigoSecreto =
    participantes[Math.floor(Math.random() * participantes.length)];
  resultado.innerHTML = `<h3>El amigo secreto es:</h3><p>${amigoSecreto}</p>`;
  // reiniciar la lista de participantes
  participantes = [];
  actualizarLista();
}
