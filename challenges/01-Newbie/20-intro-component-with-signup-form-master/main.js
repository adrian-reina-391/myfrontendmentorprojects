// Seleccionamos el formulario y los campos usando IDs
const form = document.getElementById('signup-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Función para validar el email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar errores
function showError(input, message) {
    // Primero limpiamos cualquier error existente
    clearError(input);
    
    const inputGroup = input.parentElement;
    
    // Crear el ícono de error si no existe
    if (!inputGroup.querySelector('.error-icon')) {
        const errorIcon = document.createElement('img');
        errorIcon.src = './images/icon-error.svg';
        errorIcon.className = 'error-icon';
        inputGroup.appendChild(errorIcon);
    }

    // Crear el mensaje de error si no existe
    if (!inputGroup.querySelector('.error-message')) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        inputGroup.appendChild(errorMessage);
    }

    // Añadir clase de error al input
    input.classList.add('error');
}

// Función para limpiar errores
function clearError(input) {
    const inputGroup = input.parentElement;
    
    // Remover el ícono de error si existe
    const errorIcon = inputGroup.querySelector('.error-icon');
    if (errorIcon) {
        errorIcon.remove();
    }

    // Remover el mensaje de error si existe
    const errorMessage = inputGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }

    // Remover la clase de error del input
    input.classList.remove('error');
}

// Validación en tiempo real (mientras el usuario escribe)
firstName.addEventListener('input', () => clearError(firstName));
lastName.addEventListener('input', () => clearError(lastName));
email.addEventListener('input', () => clearError(email));
password.addEventListener('input', () => clearError(password));

// Validación al enviar el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío automático

    let hasErrors = false;

    // Validar nombre
    if (firstName.value.trim() === '') {
        showError(firstName, 'First Name cannot be empty');
        hasErrors = true;
    }

    // Validar apellido
    if (lastName.value.trim() === '') {
        showError(lastName, 'Last Name cannot be empty');
        hasErrors = true;
    }

    // Validar email
    if (email.value.trim() === '') {
        showError(email, 'Email cannot be empty');
        hasErrors = true;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Looks like this is not an email');
        hasErrors = true;
    }

    // Validar contraseña
    if (password.value.trim() === '') {
        showError(password, 'Password cannot be empty');
        hasErrors = true;
    } else if (password.value.trim().length < 6) {
        showError(password, 'Password must be at least 6 characters');
        hasErrors = true;
    }

    // Si no hay errores, enviar el formulario
    if (!hasErrors) {
        form.submit();
    }
});