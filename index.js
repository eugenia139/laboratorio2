
function validarFormulario() {
  // Obtener los elementos del formulario
  const usuario = document.getElementsByName("usuario")[0];
  const contrasena = document.getElementsByName("contrasena")[0];
  const confirmar = document.getElementsByName("confirmar")[0];
  const telefono = document.getElementsByName("telefono")[0];
  const email = document.getElementsByName("email")[0];

  // Validar cada campo del formulario
  if (usuario.value === "") {
    usuario.classList.remove("correcto");
    usuario.classList.add("incorrecto");
  } else {
    usuario.classList.remove("incorrecto");
    usuario.classList.add("correcto");
  }

  if (contrasena.value === "") {
    contrasena.classList.remove("correcto");
    contrasena.classList.add("incorrecto");
  } else {
    contrasena.classList.remove("incorrecto");
    contrasena.classList.add("correcto");
  }

  if (confirmar.value === "" || confirmar.value !== contrasena.value) {
    confirmar.classList.remove("correcto");
    confirmar.classList.add("incorrecto");
  } else {
    confirmar.classList.remove("incorrecto");
    confirmar.classList.add("correcto");
  }

  if (telefono.value === "" || !telefono.checkValidity()) {
    telefono.classList.remove("correcto");
    telefono.classList.add("incorrecto");
  } else {
    telefono.classList.remove("incorrecto");
    telefono.classList.add("correcto");
  }

  if (email.value === "" || !email.checkValidity()) {
    email.classList.remove("correcto");
    email.classList.add("incorrecto");
  } else {
    email.classList.remove("incorrecto");
    email.classList.add("correcto");
  }

  // Comprobar si todos los campos están completos y coinciden
  if (usuario.value !== "" && contrasena.value !== "" && confirmar.value !== "" && telefono.value !== "" && email.value !== "" && confirmar.value === contrasena.value && telefono.checkValidity() && email.checkValidity()) {
    alert("Se ha rellenado correctamente.");
    }
    else {
    alert("Por favor, completa correctamente todos los campos.");     
    }
}



