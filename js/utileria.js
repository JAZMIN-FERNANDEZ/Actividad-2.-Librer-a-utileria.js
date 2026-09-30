
function validarCorreo(correo) {
    const formato = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    return formato.test(correo);
}

function soloLetras(texto) {
    const letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return letras.test(texto);
}

function validarLongitud(valor, maximo) {
    return String(valor).length <= maximo;
}

function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if (hoy.getMonth() < nacimiento.getMonth() || (hoy.getMonth() == nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const formato = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return formato.test(password);
}


function validarCURP(curp) {
    curp = curp.toUpperCase();

    const formato = /^[A-Z][AEIOU][A-Z]{2}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;

    return formato.test(curp);
}
function validarTelefono(telefono) {
    const formato = /^\d{10}$/;
    return formato.test(telefono);
}

function validarCodigoPostal(codigo) {
    const formato = /^\d{5}$/;
    return formato.test(codigo);
}
function guardarDatos(datos) {
    localStorage.setItem("usuario", JSON.stringify(datos));
}


function formatearTelefono(telefono) {
    return telefono.substring(0, 3) + "-" + telefono.substring(3, 6) + "-" + telefono.substring(6, 10);
}