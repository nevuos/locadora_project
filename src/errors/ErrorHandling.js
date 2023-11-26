import Swal from 'sweetalert2';

export const showErrorAlert = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Erro',
    text: message,
    timer: 3000, 
    showConfirmButton: false, 
    background: '#171b1d', 
    color: '#fff', 
  });
};

export const showSuccessAlert = (message) => {
  return new Promise((resolve) => {
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: message,
      timer: 3000,
      showConfirmButton: false,
      background: '#171b1d',
      color: '#fff',
    }).then(() => {
      resolve(true);
    });
  });
};

export const showConfirmationAlert = (message, confirmButtonText = 'Confirmar', cancelButtonText = 'Cancelar') => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      background: '#171b1d',
      color: '#fff',
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
};
