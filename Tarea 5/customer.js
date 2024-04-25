document
  .getElementById("customerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    document.getElementById("message").textContent =
      "Cliente registrado correctamente: " +
      name +
      " - " +
      email +
      " - " +
      age +
      " años.";
    document.getElementById("customerForm").reset();
  });
