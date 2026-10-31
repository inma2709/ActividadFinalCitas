
/*
  PRÁCTICA FINAL · GESTOR DE CITAS
*/


// =========================================
// 1. ARRAY DE CITAS
// =========================================

let citas = [
  { cliente: "Marta Ruiz", servicio: "Corte", precio: 25 },
  { cliente: "Juan Pérez", servicio: "Peinado", precio: 30 }
];


// =========================================
// 2. SELECCIONAR ELEMENTOS HTML
// =========================================

const listaCitas = document.querySelector("#listaCitas");
const totalCitas = document.querySelector("#totalCitas");
const importeTotal = document.querySelector("#importeTotal");

const formulario = document.querySelector("#formularioCita");
const nombreCliente = document.querySelector("#nombreCliente");
const servicio = document.querySelector("#servicio");
const precio = document.querySelector("#precio");
const mensaje = document.querySelector("#mensaje");


// =========================================
// RETO 1 · MOSTRAR CITAS
// RETO 3 · CALCULAR EL TOTAL
// =========================================

function mostrarCitas() {

  listaCitas.innerHTML = "";

  let total = 0;

  for (const cita of citas) {

    listaCitas.innerHTML += `
      <div class="cita">
        <h3>${cita.cliente}</h3>
        <p>${cita.servicio}</p>
        <p class="precio">${cita.precio} €</p>
      </div>
    `;

    total += cita.precio;
  }

  totalCitas.textContent = citas.length;
  importeTotal.textContent = total + " €";
}


// =========================================
// RETO 2 · AÑADIR CITAS
// =========================================

function agregarCita() {

  // Evitar que el formulario recargue la página
 
  // Crear el objeto con los datos introducidos
  const nuevaCita = {
    cliente: nombreCliente.value.trim(),
    servicio: servicio.value,
    precio: Number(precio.value)
  };

  // Añadir la cita al array
  citas.push(nuevaCita);

  // Actualizar el listado y el importe
  mostrarCitas();

  // Limpiar el formulario
  formulario.reset();

  // Mostrar mensaje
  mensaje.textContent = "Cita añadida correctamente.";
}


// =========================================
// RETO 4 · BOTONES INFORMATIVOS
// =========================================

function mostrarConsejo(tipo) {

  const mensajeReto4 = document.querySelector("#mensajeReto4");

  if (tipo === "servicio") {
    mensajeReto4.textContent =
      "El servicio de la semana es Corte y peinado.";

  } else if (tipo === "consejo") {
    mensajeReto4.textContent =
      "Recuerda terminar con un buen chorro de agua fría.";
  }
}





// =========================================
// INICIO DE LA APLICACIÓN
// =========================================

mostrarCitas();
