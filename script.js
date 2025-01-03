function handleSubscribe(event) {
    console.log("handleSubscribe chamada");
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("response-message");

    const validationEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validationEmail.test(email)) {
      message.textContent = "Por favor, insira um endereço de e-mail válido.";
      message.style.color = "red";
      return;
    }

    message.textContent = "E-mail enviado com sucesso!";
    message.style.color = "green";

    console.log("Email enviado:", email);


    document.getElementById("email").value = "";
  }