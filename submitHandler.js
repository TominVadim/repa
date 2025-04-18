export default function setupSubmitHandler(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.body.innerHTML = '<h3>User successfully registered</h3>';
    });
  }