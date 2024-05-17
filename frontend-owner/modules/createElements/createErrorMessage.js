export default function createErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.toggle('error');
  errorMessage.textContent = message;

  return errorMessage;
}
