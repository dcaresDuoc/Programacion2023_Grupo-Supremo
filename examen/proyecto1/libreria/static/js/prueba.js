$(document).ready(function() {
    $("#form").submit(function(e) {
      e.preventDefault();
  
      let name = $("#name").val();
      let rut = $("#rut").val();
      const email = $("#email").val();
      const phone = $("#phone").val();
      let comment = $("#comment").val();
  
      const errors = [];
  
      if (name.trim() === "")
        errors.push({
          field: "name",
          message: "El nombre es obligatorio",
        });
  
      if (rut.trim() === "")
        errors.push({
          field: "rut",
          message: "El rut es obligatorio",
        }); 
  
      if (email === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
        errors.push({
          field: "email",
          message: "El email tiene formato inválido",
        });
  
      if (phone === "" || !/^[0-9]{9}$/g.test(phone)) {
        errors.push({
          field: "phone",
          message: "El teléfono tiene que tener 9 dígitos",
        });
      }
  
      if (comment.trim() === "")
        errors.push({
          field: "comment",
          message: "El comentario es obligatorio",
        });
  
      if (errors.length > 0) {
        let message = errors.map(function(error) {
          return error.field + ": " + error.message;
        });
  
        message = message.join("\n");
  
        alert(message);
      } else {
        $("#form")[0].reset();
        alert("Formulario enviado correctamente");
      }
    });
  });

  //original sin rut

  $(document).ready(function() {
    $("#form").submit(function(e) {
      e.preventDefault();
  
      const name = $("#name").val();
      const email = $("#email").val();
      const phone = $("#phone").val();
      const comment = $("#comment").val();
  
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
        let message = errors.map(function(error) {
          return error.field + ": " + error.message;
        });
  
        message = message.join("\n");
  
        alert(message);
      } else {
        const data = {
          name: name,
          email: email,
          phone: phone,
          comment: comment
        };
  
        $.ajax({
          type: "POST",
          url: "http://localhost:4000/api/contact",
          data: JSON.stringify(data),
          contentType: "application/json",
          success: function(response) {
            $("#form")[0].reset();
            alert("Formulario enviado correctamente");
          },
          error: function(error) {
            alert("Error al enviar el formulario");
          }
        });
      }
    });
  });
  
  