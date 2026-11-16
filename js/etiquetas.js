// Etiquetas didácticas: miden en directo lo que el CSS está haciendo.
// No hace falta para que la web sea responsiva; solo sirve para explicarlo.

const remPx = () => parseFloat(getComputedStyle(document.documentElement).fontSize);

function objetivoDe(etq) {
  const sel = etq.dataset.objetivo;
  if (sel === 'next') return etq.closest('.demo').querySelector('img');
  return document.querySelector(sel);
}

const medidores = {
  // Tamaño de letra real que resulta del clamp()
  fuente(el) {
    const px = parseFloat(getComputedStyle(el).fontSize);
    return `${Math.round(px)}px (${(px / remPx()).toFixed(2)}rem)`;
  },
  // Número de columnas que Grid ha decidido crear
  columnas(el) {
    const n = getComputedStyle(el).gridTemplateColumns.split(' ').length;
    const ancho = Math.round(el.firstElementChild.getBoundingClientRect().width);
    return `${n} columna${n > 1 ? 's' : ''} de ${ancho}px`;
  },
  // Ancho real de un elemento
  ancho(el) {
    return `${Math.round(el.getBoundingClientRect().width)}px`;
  },
};

function actualizar() {
  const w = window.innerWidth;
  document.getElementById('vw').textContent = w;
  document.getElementById('vrem').textContent = (w / remPx()).toFixed(1);

  // Cursor sobre la regla (escala 0–80rem)
  const pos = Math.min(w / remPx(), 80) / 80 * 100;
  document.getElementById('cursor').style.left = `${pos}%`;

  document.querySelectorAll('[data-medir]').forEach((b) => {
    const el = objetivoDe(b);
    if (el) b.textContent = medidores[b.dataset.medir](el);
  });
}

window.addEventListener('resize', actualizar);
window.addEventListener('load', actualizar);
new ResizeObserver(actualizar).observe(document.body);

// Botón para mostrar/ocultar etiquetas y ver la página "limpia"
const boton = document.getElementById('toggle');
boton.addEventListener('click', () => {
  const activas = document.body.classList.toggle('con-etiquetas');
  boton.textContent = activas ? 'Ocultar etiquetas' : 'Mostrar etiquetas';
});
