// Validar checkbox de aceptación de datos
const acceptCheckbox = document.getElementById('acceptData');
if (!acceptCheckbox.checked) {
  applyValidationState(acceptCheckbox, false, '⚠️ Debes aceptar el tratamiento de datos para continuar.');
  showNotification('⚠️ Debes aceptar la política de datos para enviar el formulario.', 'error');
  return;
} else {
  applyValidationState(acceptCheckbox, true, '');
}