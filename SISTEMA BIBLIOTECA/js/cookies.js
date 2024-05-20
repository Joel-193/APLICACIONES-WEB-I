
// Guardar datos en cookies al enviar el formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.querySelector('input[name="userName"]').value;
    const userEmail = document.querySelector('input[name="userEmail"]').value;
    const userPassword = document.querySelector('input[name="userPassword"]').value;

    // Crear cookies
    document.cookie = `userName=${userName}; path=/`;
    document.cookie = `userEmail=${userEmail}; path=/`;
    document.cookie = `userPassword=${userPassword}; path=/`;

    console.log('Cookies guardadas:', document.cookie);
});

// Función para mostrar las cookies
function mostrarCookies() {
    alert(`Cookies: ${document.cookie}`);
}

// Función para modificar la cookie de nombre de usuario
function modificarCookieUsuario(nuevoNombre) {
    document.cookie = `userName=${nuevoNombre}; path=/`;
    alert(`Cookie de nombre de usuario modificada a: ${nuevoNombre}`);
}

// Función para eliminar las cookies
function eliminarCookies() {
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userPassword=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert('Cookies eliminadas');
}

// Agregar eventos a los botones
document.getElementById('mostrar').addEventListener('click', mostrarCookies);
document.getElementById('modificar').addEventListener('click', function() {
    const nuevoNombre = prompt('Introduce el nuevo nombre de usuario:');
    if (nuevoNombre) {
        modificarCookieUsuario(nuevoNombre);
    }
});
document.getElementById('eliminar').addEventListener('click', eliminarCookies);
