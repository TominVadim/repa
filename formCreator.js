export default function createForm() {
    const container = document.querySelector('.form-container');
    const form = document.createElement('form');
    form.innerHTML = `
      <div class="form-group">
        <label>Name<input type="text" class="form-control"></label>
      </div>
      <div class="form-group">
        <label>Phone<input type="text" class="form-control"></label>
      </div>
      <button type="submit" disabled>Submit</button>
    `;
    container.appendChild(form);
    return form;
  }