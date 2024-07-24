import Swal from 'sweetalert2';

const handleStatusCode = (status) => {
  switch (status) {
    case 200:
      Swal.fire({
        title: 'Éxito',
        text: 'La solicitud se realizó correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      break;
    case 201:
      Swal.fire({
        title: 'Creado',
        text: 'El recurso fue creado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      break;
    case 204:
      Swal.fire({
        title: 'Eliminado',
        text: 'El recurso fue eliminado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      break;
    case 400:
      Swal.fire({
        title: 'Solicitud Incorrecta',
        text: 'La solicitud tiene errores o está mal formada.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      break;
    case 401:
      Swal.fire({
        title: 'No Autorizado',
        text: 'No tienes permisos para realizar esta acción.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      break;
    case 404:
      Swal.fire({
        title: 'No Encontrado',
        text: 'El recurso solicitado no fue encontrado.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      break;
    case 500:
      Swal.fire({
        title: 'Error del Servidor',
        text: 'Hubo un problema con el servidor. Inténtalo de nuevo más tarde.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      break;
    default:
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error inesperado.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
  }
};

export default handleStatusCode;