export default function setupButtonState(form) {
    const [nameInput, phoneInput] = form.querySelectorAll('input');
    const submitButton = form.querySelector('button');
  
    const updateButtonState = () => {
      const nameValid = nameInput.classList.contains('is-valid');
      const phoneValid = phoneInput.classList.contains('is-valid');
      submitButton.disabled = !(nameValid && phoneValid);
    };
  
    nameInput.addEventListener('input', updateButtonState);
    phoneInput.addEventListener('input', updateButtonState);
  }