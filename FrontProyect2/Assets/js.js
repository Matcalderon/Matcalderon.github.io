// Esperar a que se cargue la página
window.onload = function() {
    // Seleccionar elementos HTML
    var filterButtons = document.querySelectorAll('.filter-button');
    var galleryItems = document.querySelectorAll('.gallery-item');
    
    // ----------------Añadir evento click a los botones de filtro-----------------------
    filterButtons.forEach(function(button) {//forEach() para iterar sobre cada botón en un arreglo llamado filterButtons.
      button.addEventListener('click', function() { //event listener está a la espera de que el usuario haga clic en el botón.
        var filter = this.getAttribute('data-filter'); //Cuando el usuario hace clic en el botón, se ejecuta otra función anonima que obtiene el valor del atributo data-filter del botón haciendo uso del método getAttribute()
        filterItems(filter);// función llamada filterItems() y se le pasa como argumento el valor del filtro que se acaba de obtener. Esta función es la encargada de aplicar el filtro a la lista de elementos correspondiente en la página.
      });
    });
    
    // --------------Filtrar las imágenes y aplicar animaciones ---------------------


    function filterItems(filter) {// función llamada filterItems() que recibe un argumento llamado filter, que representa el filtro que se debe aplicar a una lista de elementos en la pagina.
      galleryItems.forEach(function(item) {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.animation = 'fadeIn 1s ease';
          item.style.display = 'block';
        } else {
          item.style.animation = 'fadeOut 1s ease';
          setTimeout(function() {
            item.style.display = 'none';
          }, 500);
        }
      });
    }
  }