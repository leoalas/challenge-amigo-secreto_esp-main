// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica para
// resolver el problema.
// Lista de participantes
// Lista de participantes
// Lista de participantes
let participantes = [];
let ingresaAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let nombre = ingresaAmigo.value.trim(); // Quitamos espacios en blanco al inicio y al final

  if (!nombre) {
    alert("Por favor ingrese un nombre válido"); // Mostramos la alerta si el campo está vacío
    return; // Salimos de la función sin agregar nada
  }

  if (!participantes.includes(nombre)) {
    participantes.push(nombre);
    actualizarLista();
    ingresaAmigo.value = ""; // Limpiamos el campo de texto después de agregar un nombre
  }
}

// Función para actualizar la lista en pantalla
//function actualizarLista() {
// listaAmigos.innerHTML = participantes.map((p) => `<li>${p}</li>`).join("");
//}
function actualizarLista() {
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar
  for (let i = 0; i < participantes.length; i++) {
    let li = document.createElement("li");
    li.textContent = participantes[i];
    listaAmigos.appendChild(li);
  }
}

// Función para seleccionar un amigo al azar y ocultar la lista
function sortearAmigo() {
  if (participantes.length < 2) {
    resultado.innerHTML = "<p>Debe haber al menos 2 participantes.</p>";
    return;
  }

  // Selección de un amigo al azar
  let amigoSecreto =
    participantes[Math.floor(Math.random() * participantes.length)];

  // Ocultar la lista de amigos
  listaAmigos.innerHTML = "";

  // Mostrar solo el amigo secreto sorteado
  resultado.innerHTML = `<h3>El amigo secreto es:</h3><p>${amigoSecreto}</p>`;
}
