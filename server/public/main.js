const emailInput = document.querySelector('.email-box');
const emailError = document.querySelector('#error-label');
const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

function validateEmail() {
    const email = emailInput.value;

    if (emailRegex.test(email)) {
        emailInput.classList.remove('hidden');
        emailError.style.display = 'none';
    } else {
        emailInput.classList.add('hidden');
        emailError.style.display = 'block';

        // return to normal if the input is empty
        if (!email.trim()) {
            setTimeout(() => {
                emailInput.classList.remove('hidden');
                emailError.style.display = 'none';
            }, 1000); 
        }
    }
}

emailInput.addEventListener('input', validateEmail);

const dismissButton = document.querySelector('.dismissButton');

dismissButton.addEventListener('click', () => {
    window.location.href = 'index.ejs';
});