const form = document.getElementById("form-validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const cedula = document.getElementById("cedula");
  const nombre = document.getElementById("nombre");
  const direccion = document.getElementById("direccion");
  const email = document.getElementById("email");
  const dni = document.getElementById("dni");
  const carrera = document.getElementById("carrera");
  const telefono = document.getElementById("telefono");
  const contrasena = document.getElementById("contrasena");
  const confirmaContrasena = document.getElementById("confirma-contrasena");

  let valid = true;

  // Validación de la cédula
  const cedulaRegex = /^\d{10}$/; // Ejemplo para una cédula de 10 dígitos
  if (cedula.value.trim() === "") {
    showError(cedula, "Por favor ingrese cédula");
    valid = false;
  } else if (!cedulaRegex.test(cedula.value)) {
    showError(cedula, "Cédula inválida. Debe contener 10 dígitos.");
    valid = false;
  } else {
    hideError(cedula);
  }

  // Validación del nombre
  const nombreRegex = /^[a-zA-Z\s]+$/;
  if (nombre.value.trim() === "") {
    showError(nombre, "Por favor ingrese nombre");
    valid = false;
  } else if (!nombreRegex.test(nombre.value)) {
    showError(nombre, "Nombre inválido. Solo se permiten letras y espacios.");
    valid = false;
  } else {
    hideError(nombre);
  }

  // Validación de la dirección
  const direccionRegex = /^[a-zA-Z0-9\s,.-]+$/;
  if (direccion.value.trim() === "") {
    showError(direccion, "Por favor ingrese dirección");
    valid = false;
  } else if (!direccionRegex.test(direccion.value)) {
    showError(direccion, "Dirección inválida. Caracteres permitidos: letras, números, espacios, comas, puntos y guiones.");
    valid = false;
  } else {
    hideError(direccion);
  }

  // Validación del email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === "") {
    showError(email, "Por favor ingrese email");
    valid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(email, "Email inválido. Debe seguir el formato estándar.");
    valid = false;
  } else {
    hideError(email);
  }

  // Validación del DNI
  const dniRegex = /^\d{8,10}$/; // Ejemplo para un DNI de 8 a 10 dígitos
  if (dni.value.trim() === "") {
    showError(dni, "Por favor ingrese DNI");
    valid = false;
  } else if (!dniRegex.test(dni.value)) {
    showError(dni, "DNI inválido. Debe contener entre 8 y 10 dígitos.");
    valid = false;
  } else {
    hideError(dni);
  }

  // Validación de la carrera
  if (carrera.value.trim() === "") {
    showError(carrera, "Por favor ingrese carrera");
    valid = false;
  } else {
    hideError(carrera);
  }

  // Validación del teléfono
  const telefonoRegex = /^\d{7,10}$/; // Ejemplo para un teléfono de 7 a 10 dígitos
  if (telefono.value.trim() === "") {
    showError(telefono, "Por favor ingrese teléfono");
    valid = false;
  } else if (!telefonoRegex.test(telefono.value)) {
    showError(telefono, "Teléfono inválido. Debe contener entre 7 y 10 dígitos.");
    valid = false;
  } else {
    hideError(telefono);
  }

  // Validación de la contraseña
  if (contrasena.value.trim() === "") {
    showError(contrasena, "Por favor ingrese contraseña");
    valid = false;
  } else {
    hideError(contrasena);
  }

  // Validación de la confirmación de la contraseña
  if (confirmaContrasena.value.trim() === "") {
    showError(confirmaContrasena, "Por favor confirme la contraseña");
    valid = false;
  } else if (contrasena.value !== confirmaContrasena.value) {
    showError(confirmaContrasena, "Las contraseñas no coinciden");
    valid = false;
  } else {
    hideError(confirmaContrasena);
  }

  if (valid) {
    form.submit();
    // Redirigir a otra página en caso de validación exitosa
    //window.location.href = "success.html";
  }
});

function showError(input, message) {
  const small = input.nextElementSibling;
  small.innerText = message;
  small.style.display = "block";
}

function hideError(input) {
  const small = input.nextElementSibling;
  small.innerText = "";
  small.style.display = "none";
}
