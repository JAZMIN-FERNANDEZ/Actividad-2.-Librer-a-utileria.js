function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
}

function soloLetras(texto){
    const regex= /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    const regex = new RegExp(`^\\d{1,${maxLongitud}}$`);
    return regex.test(String(numero));
}
function esMayorDeEdad(fechaNacimiento) {

    let edad = calcularEdad(fechaNacimiento);

    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
function calcularEdad(fechaNacimiento) {

    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if (hoy.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    }

    if (hoy.getMonth() === nacimiento.getMonth() &&
        hoy.getDate() < nacimiento.getDate()) {
        edad = edad - 1;
    }

    return edad;
}