const form = document.getElementById("form-validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email");
  const contrasena = document.getElementById("contrasena");

  let valid = true;

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

  // Validación de la contraseña
  if (contrasena.value.trim() === "") {
    showError(contrasena, "Por favor ingrese contraseña");
    valid = false;
  } else {
    hideError(contrasena);
  }

  if (valid) {
    //form.submit();
    //Redirigir a otra página en caso de validación exitosa
    window.location.href = "/html/inicio.html";
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
