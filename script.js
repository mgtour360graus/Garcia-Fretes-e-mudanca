
(() => {
  // ano no rodapé
  const y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();

  // lightbox simples
  const gallery = document.querySelector('[data-lightbox]');
  if (!gallery) return;

  const overlay = document.createElement('div');
  overlay.className = 'lb';
  overlay.innerHTML = `
    <button class="lb__close" aria-label="Fechar">×</button>
    <img class="lb__img" alt="">
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lb__img');
  const closeBtn = overlay.querySelector('.lb__close');

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('lb--open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('lb--open');
    img.src = '';
    document.body.style.overflow = '';
  };

  gallery.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    const thumb = a.querySelector('img');
    open(a.getAttribute('href'), thumb ? thumb.alt : '');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  closeBtn.addEventListener('click', close);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
