const form = document.getElementById("form-validation");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const cedula = document.querySelector('#cedula').value;
        const apellido = document.querySelector('#apellido').value;
        const nombre = document.querySelector('#nombre').value;
        const direccion = document.querySelector('#direccion').value;
        const telefono = document.querySelector('#telefono').value;
        const email = document.querySelector('#email').value;
        let valid = true;

        // Validación de la cédula
        const cedulaRegex = /^\d{10}$/; // Ejemplo para una cédula de 10 dígitos
        if (cedula.trim() === "") {
          showError(document.querySelector('#cedula'), "Por favor ingrese cédula");
          valid = false;
        } else if (!cedulaRegex.test(cedula)) {
          showError(document.querySelector('#cedula'), "Cédula inválida. Debe contener 10 dígitos.");
          valid = false;
        } else {
          hideError(document.querySelector('#cedula'));
        }

        // Validación del apellido
        const nombreRegex = /^[a-zA-Z\s]+$/;
        if (apellido.trim() === "") {
          showError(document.querySelector('#apellido'), "Por favor ingrese apellido");
          valid = false;
        } else if (!nombreRegex.test(apellido)) {
          showError(document.querySelector('#apellido'), "Apellido inválido. Solo se permiten letras y espacios.");
          valid = false;
        } else {
          hideError(document.querySelector('#apellido'));
        }
        
        // Validación del nombre
        if (nombre.trim() === "") {
          showError(document.querySelector('#nombre'), "Por favor ingrese nombre");
          valid = false;
        } else if (!nombreRegex.test(nombre)) {
          showError(document.querySelector('#nombre'), "Nombre inválido. Solo se permiten letras y espacios.");
          valid = false;
        } else {
          hideError(document.querySelector('#nombre'));
        }

        // Validación de la dirección
        const direccionRegex = /^[a-zA-Z0-9\s,.-]+$/;
        if (direccion.trim() === "") {
          showError(document.querySelector('#direccion'), "Por favor ingrese dirección");
          valid = false;
        } else if (!direccionRegex.test(direccion)) {
          showError(document.querySelector('#direccion'), "Dirección inválida. Caracteres permitidos: letras, números, espacios, comas, puntos y guiones.");
          valid = false;
        } else {
          hideError(document.querySelector('#direccion'));
        }

        // Validación del teléfono
        const telefonoRegex = /^\d{7,10}$/; // Ejemplo para un teléfono de 7 a 10 dígitos
        if (telefono.trim() === "") {
          showError(document.querySelector('#telefono'), "Por favor ingrese teléfono");
          valid = false;
        } else if (!telefonoRegex.test(telefono)) {
          showError(document.querySelector('#telefono'), "Teléfono inválido. Debe contener entre 7 y 10 dígitos.");
          valid = false;
        } else {
          hideError(document.querySelector('#telefono'));
        }

        // Validación del email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.trim() === "") {
          showError(document.querySelector('#email'), "Por favor ingrese email");
          valid = false;
        } else if (!emailRegex.test(email)) {
          showError(document.querySelector('#email'), "Email inválido. Debe seguir el formato estándar.");
          valid = false;
        } else {
          hideError(document.querySelector('#email'));
        }

        if (valid) {
          const Clientes = JSON.parse(localStorage.getItem('Clientes')) || [];
          const isClienteRegistered = Clientes.find(cliente => cliente.cedula == cedula);

          if (isClienteRegistered) {
            return alert('El cliente ya está registrado');
          }

          Clientes.push({
            cedula: cedula,
            apellido: apellido,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email
          });

          localStorage.setItem('Clientes', JSON.stringify(Clientes));
          alert('Registro Exitoso');
          window.location.href = 'registroCliente.html';
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