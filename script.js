const burger = document.querySelector('[data-burger]');
const mobileMenu = document.querySelector('[data-mobile]');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// Lightbox
const lb = document.querySelector('[data-lightbox]');
const lbImg = document.querySelector('[data-lightbox-img]');
const lbClose = document.querySelector('[data-lightbox-close]');

document.querySelectorAll('[data-gallery]').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-src');
    const alt = item.getAttribute('data-alt') || '';
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.add('open');
  });
});

function closeLb(){
  lb.classList.remove('open');
  lbImg.src = '';
}
lbClose?.addEventListener('click', closeLb);
lb?.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
