const texto = document.getElementById("texto");
const mensaje = "Arte Digital";
let index = 0;

function mostrarSiguienteLetra() {
  const letraActual = document.getElementsByClassName("letra")[index];
  letraActual.style.opacity = "1";
  index++;
  if (index >= mensaje.length) {
    setTimeout(ocultarTexto, 500);
  }
}


function mostrarTexto() {
  index = 0;
  for (const letra of document.getElementsByClassName("letra")) {
    letra.style.opacity = "0";
  }
  setTimeout(() => {
    const intervalo = setInterval(() => {
      mostrarSiguienteLetra();
      if (index >= mensaje.length) {
        clearInterval(intervalo);
      }
    }, 100);
  }, 500);
}

// Dividir el texto en letras y crear elementos HTML para cada letra
for (const char of mensaje) {
  const letra = document.createElement("span");
  letra.textContent = char;
  letra.classList.add("letra");
  texto.appendChild(letra);
}

// Llamar a la función mostrarTexto() después de un retraso de 1 segundo
setTimeout(mostrarTexto, 500);
