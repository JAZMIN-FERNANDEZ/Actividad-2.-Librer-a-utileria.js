const formulario = document.getElementById("formularioRegistro");

document.getElementById("fechaNacimiento").max = new Date().toISOString().split("T")[0];

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    //aqui cada linea busca un input por su id

    const nombre = document.getElementById("nombre");
    const curp = document.getElementById("curp");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const codigo = document.getElementById("codigoPostal");
    const fecha = document.getElementById("fechaNacimiento");
    const password = document.getElementById("password");

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCurp").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorTelefono").textContent = "";
    document.getElementById("errorCP").textContent = "";
    document.getElementById("errorFecha").textContent = "";
    document.getElementById("errorPassword").textContent = "";

    let correcto = true;

    if (nombre.value.trim() == "" || !soloLetras(nombre.value) || !validarLongitud(nombre.value, 50)) {
    document.getElementById("errorNombre").textContent = "Escribe un nombre válido (solo letras, máximo 50).";
    nombre.value = "";
    correcto = false;
}

    if (!validarCURP(curp.value)) {
        document.getElementById("errorCurp").textContent = "La CURP no tiene un formato válido.";
        curp.value = "";
        correcto = false;
    }

    if (!validarCorreo(correo.value) || !validarLongitud(correo.value, 50)) {
    document.getElementById("errorCorreo").textContent = "Correo no válido (máximo 50 caracteres).";
    correo.value = "";
    correcto = false;
}

   if (!validarTelefono(telefono.value)) {
    document.getElementById("errorTelefono").textContent = "El teléfono debe tener 10 dígitos.";
    telefono.value = "";
    correcto = false;
}

if (!validarCodigoPostal(codigo.value)) {
    document.getElementById("errorCP").textContent = "El código postal debe tener 5 dígitos.";
    codigo.value = "";
    correcto = false;
}

    if (fecha.value == "") {
        document.getElementById("errorFecha").textContent = "Selecciona una fecha.";
        correcto = false;
    } else if (new Date(fecha.value) > new Date()) {
        document.getElementById("errorFecha").textContent = "La fecha no puede ser posterior a hoy.";
        fecha.value = "";
        correcto = false;
    }

    if (!validarPassword(password.value)) {
        document.getElementById("errorPassword").textContent = "Debe tener mayúscula, minúscula, número, símbolo y mínimo 8 caracteres.";
        password.value = "";
        correcto = false;
    }

    if (!correcto) {
        return; 
    }
    const edad = calcularEdad(fecha.value);
    const mayor = esMayorDeEdad(fecha.value);

    const datos = {
        nombre: nombre.value,
        curp: curp.value.toUpperCase(),
        correo: correo.value,
        telefono: telefono.value,
        codigoPostal: codigo.value,
        fechaNacimiento: fecha.value,
        password: password.value,
        edad: edad
    };

    guardarDatos(datos);

    document.getElementById("datosRegistrados").innerHTML =
        "<p><strong>Nombre:</strong> " + datos.nombre + "</p>" +
        "<p><strong>CURP:</strong> " + datos.curp + "</p>" +
        "<p><strong>Correo:</strong> " + datos.correo + "</p>" +
        "<p><strong>Teléfono:</strong> " + formatearTelefono(datos.telefono) + "</p>" +
        "<p><strong>Código postal:</strong> " + datos.codigoPostal + "</p>" +
        "<p><strong>Fecha de nacimiento:</strong> " + datos.fechaNacimiento + "</p>" +
        "<p><strong>Edad:</strong> " + datos.edad + " años</p>" +
        "<p><strong>Mayor de edad:</strong> " + (mayor ? "Sí" : "No") + "</p>";

    document.getElementById("modal").classList.add("mostrar");
});

document.getElementById("cerrar").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("mostrar");
});

document.getElementById("irLogin").addEventListener("click", function() {
    window.location.href = "login.html";
});
