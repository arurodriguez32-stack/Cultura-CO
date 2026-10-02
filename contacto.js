document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if(nombre === "" || email === "" || telefono === "" || mensaje === ""){
            alert("Por favor complete todos los campos.");
            return;
        }

        alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");

        formulario.reset();

    });

});