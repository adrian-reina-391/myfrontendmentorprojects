// Seleccionar elementos del DOM
const emailInput = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const errorMessage = document.getElementById('error-message');
const submitIcon = document.getElementById('submit-icon');
const emailForm = document.getElementById('emailForm');

// Función para validar el formato del email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar emails
  return emailRegex.test(email);
}

// Manejar el evento de clic en el ícono de flecha
submitIcon.addEventListener('click', () => {
  const emailValue = emailInput.value.trim(); // Obtener el valor del campo de email

  if (!validateEmail(emailValue)) {
    showError(); // Mostrar el error si el email no es válido
  } else {
    hideError(); // Ocultar el error si el email es válido
    emailForm.submit(); // Enviar el formulario
  }
});

// Mostrar el error
function showError() {
  errorIcon.style.display = 'block'; // Mostrar el ícono de error
  errorMessage.style.display = 'block'; // Mostrar el mensaje de error
}

// Ocultar el error
function hideError() {
  errorIcon.style.display = 'none'; // Ocultar el ícono de error
  errorMessage.style.display = 'none'; // Ocultar el mensaje de error
}

// Limpiar errores cuando el usuario empiece a escribir
emailInput.addEventListener('input', () => {
  hideError(); // Ocultar el error mientras el usuario corrige el email
});