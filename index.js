import createForm from './formCreator.js';
import setupValidation from './formValidator.js';
import setupButtonState from './buttonStateManager.js';
import setupSubmitHandler from './submitHandler.js';

const form = createForm();
setupValidation(form);
setupButtonState(form);
setupSubmitHandler(form);