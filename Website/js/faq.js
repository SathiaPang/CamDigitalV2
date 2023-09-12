const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach((accordionBtn) => {
  accordionBtn.addEventListener('click', () => {
    accordionBtn.classList.toggle('active');
    const panel = accordionBtn.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
