let button = document.getElementById('notificacion');
button.addEventListener('click', function() {
  notify();
});

const notify = () => {
  // Verifica que el navegador soporta notificaciones, creando un alert en caso de que no lo soporte 
  if (!('Notification' in window)) {
    alert('Tu navegador no soporta notificaciones');
    // Si 
  } else if (Notification.permission === 'granted') {
    // lanzar notificación si ya esta autorizado  el servicio 
    let notification = new Notification('Mi primera notificación');
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (Notification.permission === 'granted') {
        let notification = Notification('Hola Mundo !');
      }
    });
  }
};