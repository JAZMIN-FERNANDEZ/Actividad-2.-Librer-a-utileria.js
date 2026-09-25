const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    const correo = document.getElementById("correo");
    const password = document.getElementById("password");

    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorPassword").textContent = "";
    document.getElementById("resultado").textContent = "";

    if (!validarCorreo(correo.value)) {
        document.getElementById("errorCorreo").textContent = "Correo no válido.";
        correo.value = "";
        return;
    }

    if (!validarPassword(password.value)) {
        document.getElementById("errorPassword").textContent = "La contraseña no cumple con el formato.";
        password.value = "";
        return;
    }

    const datosGuardados = localStorage.getItem("usuario");

    if (datosGuardados == null) {
        document.getElementById("resultado").textContent = "No hay ningún usuario registrado.";
        return;
    }

    const usuario = JSON.parse(datosGuardados);

    if (correo.value == usuario.correo && password.value == usuario.password) {

        document.getElementById("resultado").textContent =
            "Sesión iniciada correctamente. ¡Bienvenido " + usuario.nombre + "!";

        correo.value = "";
        password.value = "";

    } else {

        document.getElementById("resultado").textContent =
            "Correo o contraseña incorrectos.";

        password.value = "";
    }

});