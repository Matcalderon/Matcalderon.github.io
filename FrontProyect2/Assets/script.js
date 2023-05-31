
/*este código define constantes que se utilizan para interactuar con diferentes elementos de la página web. 
La constante imageModal se utiliza para mostrar una imagen en un modal, la constante largeImage se utiliza para 
mostrar una imagen grande en el modal, la constante closeBtn se utiliza para cerrar el modal, la constante 
messageForm se utiliza para enviar mensajes y la constante sentMessages se utiliza para mostrar los mensajes enviados por el usuario.*/

  const imageModal = document.getElementById("image-modal");
const largeImage = document.getElementById("large-image");
const closeBtn = document.getElementsByClassName("close")[0];
const messageForm = document.getElementById("message-form");
const sentMessages = document.getElementById("sent-messages");

let currentImageId = null; // Variable para almacenar el ID de la imagen actual
const messages = {}; // Objeto para almacenar los mensajes por ID de imagen

// Seleccionar todas las imágenes dentro de elementos con la clase "gallery-item"
document.querySelectorAll(".gallery-item img").forEach((img, index) => {
  // Crear un ID único para cada imagen usando el índice del bucle
  const imageId = `image-${index}`;
  
  // Asignar el ID único a la imagen
  img.id = imageId;

  // Agregar un evento de clic a cada imagen
  img.addEventListener("click", function () {
    // Guardar el ID de la imagen actual
    currentImageId = this.id;
    
    // Mostrar el modal de la imagen
    imageModal.style.display = "block";
    
    // Establecer la fuente de la imagen grande en el modal
    largeImage.src = this.src;
    
    // Actualizar los mensajes enviados para la imagen actual
    updateSentMessages();
  });
});

// Cerrar el modal de la imagen cuando se haga clic en el botón de cierre
closeBtn.onclick = function () {
  imageModal.style.display = "none";
};

// Cerrar el modal de la imagen cuando se haga clic fuera de la imagen
window.onclick = function (event) {
  if (event.target == imageModal) {
    imageModal.style.display = "none";
  }
};

// Agregar un evento de envío al formulario de mensajes
messageForm.addEventListener("submit", function (event) {
  // Evitar que la página se recargue al enviar el formulario
  event.preventDefault();
  
  // Obtener el valor del mensaje ingresado
  const message = document.getElementById("message").value;
  
  // Si hay un mensaje, procesarlo
  if (message) {
    // Si no hay mensajes para la imagen actual, crear un array vacío
    if (!messages[currentImageId]) {
      messages[currentImageId] = [];
    }
    
    // Agregar el mensaje al array de mensajes para la imagen actual
    messages[currentImageId].push(message);
    
    // Actualizar los mensajes enviados
    updateSentMessages();
    
    // Borrar el contenido del campo de mensaje
    document.getElementById("message").value = "";
  }
});

// Función para actualizar los mensajes enviados en la página
function updateSentMessages() {
  // Borrar todos los mensajes actuales
  sentMessages.innerHTML = "";
  
  // Si hay mensajes para la imagen actual, mostrarlos
  if (messages[currentImageId]) {
    messages[currentImageId].forEach((message) => {
      // Crear un nuevo elemento de párrafo para cada mensaje
      const newMessage = document.createElement("p");
      
      // Establecer el texto del mensaje en el elemento de párrafo
      newMessage.innerText = message;
      
      // Agregar el elemento de párrafo a la lista de mensajes enviados
      sentMessages.appendChild(newMessage);
    });
  }
}



