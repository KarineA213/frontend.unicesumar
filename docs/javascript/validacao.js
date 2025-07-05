document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio automático
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('form-error');
  
    let errors = [];
  
    // Validação do nome
    if (name.length < 3) {
      errors.push('O nome deve ter pelo menos 3 caracteres.');
    }
  
    // Validação do email com regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('E-mail inválido.');
    }
  
    // Validação da mensagem
    if (message.length < 10) {
      errors.push('A mensagem deve ter pelo menos 10 caracteres.');
    }
  
    if (errors.length > 0) {
      errorElement.textContent = errors.join(' ');
    } else {
      errorElement.textContent = '';
      this.submit(); // Envia o formulário se tudo estiver ok
    }
  });
  

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio automático do formulário
  
    const message = document.getElementById('message').value.trim();
  
    if (message === '') {
      alert('Por favor, preencha a mensagem antes de enviar.');
      return; // Impede envio se a mensagem estiver vazia
    }
  
    this.submit(); // Envia o formulário se a mensagem não estiver vazia
  });
  