document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('contenedor').addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    document.getElementById('boton').addEventListener('click', function(event) {
        event.stopPropagation(); 
        alert('Hola! Soy el botón');
    });
});
