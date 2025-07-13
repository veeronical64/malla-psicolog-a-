window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('tbody tr').forEach((fila, i) => {
    const nota = fila.querySelector('td.final input');
    const fecha = fila.querySelector('td.fecha input');
    const claveNota = `nota-${i}`, claveFecha = `fecha-${i}`;

    nota.value = localStorage.getItem(claveNota) || '';
    fecha.value = localStorage.getItem(claveFecha) || '';
    actualizarFila(fila, nota.value);

    nota.addEventListener('input', () => {
      localStorage.setItem(claveNota, nota.value);
      actualizarFila(fila, nota.value);
    });

    fecha.addEventListener('input', () => {
      localStorage.setItem(claveFecha, fecha.value);
    });
  });
});

function actualizarFila(fila, valor) {
  const num = parseFloat(valor.replace(',', '.'));
  if (!isNaN(num) && num >= 6) {
    fila.style.backgroundColor = '#d4edda'; // verde claro
  } else {
    fila.style.backgroundColor = '';
  }
}
