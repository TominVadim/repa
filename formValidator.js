export default function setupValidation(form) {
    const [nameInput, phoneInput] = form.querySelectorAll('input');
  
    const validate = () => {
      const nameValid = nameInput.value.trim() !== '' && !nameInput.value.includes(' ');
      const phoneValid = /^\+[0-9]+$/.test(phoneInput.value);
      
      nameInput.classList.toggle('is-valid', nameValid);
      nameInput.classList.toggle('is-invalid', !nameValid && nameInput.value !== '');
      phoneInput.classList.toggle('is-valid', phoneValid);
      phoneInput.classList.toggle('is-invalid', !phoneValid && phoneInput.value !== '');
    };
  
    nameInput.addEventListener('input', validate);
    phoneInput.addEventListener('input', validate);
  }