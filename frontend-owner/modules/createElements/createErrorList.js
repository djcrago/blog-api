import createErrorMessage from './createErrorMessage.js';

export default function createErrorList(errors) {
  const errorList = document.createElement('ul');
  errorList.classList.toggle('error-list');

  errors.forEach((error) => {
    const errorMessage = createErrorMessage(error.msg);
    errorList.appendChild(errorMessage);
  });

  return errorList;
}
