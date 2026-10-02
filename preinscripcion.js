const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const taller = document.getElementById("taller").value;

    alert(
        "¡Preinscripción enviada! 🎉\n\n" +
        "Nombre y Apellido: " + nombre + "\n" +
        "DNI: " + dni + "\n" +
        "Email: " + email + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Taller: " + taller + "\n\n" +
        "¡Gracias por inscribirte!"
    );

    formulario.reset();

});