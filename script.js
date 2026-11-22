function evaluarQuiz() {
  // Definir la respuesta correcta
  const respuestaCorrecta = "b";
  
  // Obtener la opción seleccionada por el usuario
  const seleccionada = document.querySelector('input[name="p1"]:checked');
  const contenedorResultado = document.getElementById("resultado");

  if (!seleccionada) {
    contenedorResultado.innerHTML = "<p style='color: orange;'>Por favor, selecciona una respuesta antes de enviar.</p>";
    return;
  }

  // Evaluar y mostrar retroalimentación pedagógica
  if (seleccionada.value === respuestaCorrecta) {
    contenedorResultado.innerHTML = `
      <p style='color: green;'><strong>¡Correcto!</strong><br>Ahorrar agua y reciclar es la mejor forma de cuidar el medio ambiente.
Ejemplo: cerrar las llaves cuando no se utilicen.</p>
    `;
  } else {
    contenedorResultado.innerHTML = `
      <p style='color: red;'><strong>Incorrecto.</strong> Inténtalo de nuevo.</p>
    `;
  }
}

const imagenes = document.querySelectorAll("img");
const info = document.getElementById("info");

const textos = [
  "Ecologia",
  "Factores bioticos y abioticos",
  "Ecosistemas"
];

let actual = 0;

function mostrar(n) {
  actual = n;
  imagenes.forEach(img => img.classList.remove("grande"));
  imagenes[actual].classList.add("grande");
  info.textContent = textos[actual];
}

function cambiar(direccion) {
  mostrar((actual + direccion + imagenes.length) % imagenes.length);
}


