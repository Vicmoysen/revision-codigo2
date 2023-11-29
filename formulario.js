const formulario = document.forms["formulario"];  // Cambie var por const y lo llame con document.forms

formulario.addEventListener("submit", (event) => {   // Cambie la función que estaba por un addEventListener 

  event.preventDefault(); // Corregi prevent() por preventDefault()

  let name = formulario.elements[0]
  let age = formulario.elements[1]
  let nationality = formulario.elements[2]  // Cambie nombre de variables a nombre más descriptivo

  let nombre = name.value
  let edad = age.value

  let i = nationality.selectedIndex
  let nacionalidad = nationality.options[i].value  // Variables instanciadas con var, se cambio por let

  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error")
  } else {
    name.classList.remove("error")
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error")
  } else {
    age.classList.remove("error")   // Añadí remove para quitar el error cuando ya hay texto
  }


  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
  // Cambie la legibilidad del if
});

/* var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
Se comentaron estas lineas que duplicaban el botón
 */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") nacionalidad = "Argentina"
  else if (nacionalidad === "mx") nacionalidad = "Mexicana"
  else if (nacionalidad === "vnzl") nacionalidad = "Venezolana"
  else if (nacionalidad === "per") nacionalidad = "Peruana"


  const lista = document.getElementById("lista-de-invitados")  // Se cambio var por const
  const elementoLista = document.createElement("div") // Se cambio var por const
  elementoLista.classList.add("elemento-lista")  // Se cambio .added por .add
  lista.appendChild(elementoLista)

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  // Elimine líneas de corteLinea
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }

  // Moví función al final y no enmedio de las otras instrucciones
  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span")
    const inputNombre = document.createElement("input")
    const espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

}
