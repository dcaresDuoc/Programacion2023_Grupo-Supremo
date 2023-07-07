const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const comment = document.getElementById("comment").value;

  const errors = [];

  if (name === "")
    errors.push({
      field: "name",
      message: "El nombre es obligatorio",
    });

  if (email === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
    errors.push({
      field: "email",
      message: "El email tiene formato invalido",
    });

  if (phone === "" || !/^[0-9]{9}$/g.test(phone)) {
    errors.push({
      field: "phone",
      message: "El telefono tiene que tener 9 digitos",
    });
  }

  if (comment === "")
    errors.push({
      field: "comment",
      message: "El comentario es obligatorio",
    });

  if (errors.length > 0) {
    let message = errors.map((error) => {
      return error.field + ": " + error.message;
    });

    message = message.join("\n");

    alert(message);
  } else {
    form.reset()
    alert("Formulario enviado correctamente");
  }
});
