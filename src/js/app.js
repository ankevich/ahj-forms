const button = document.querySelector('#button');
const popover = document.querySelector('#popover');

button.addEventListener('click', () => {
  popover.classList.toggle('d-none');

  const { x, y, width } = button.getBoundingClientRect();
  const { width: popoverWidth, height: popoverHeight } = popover.getBoundingClientRect();

  popover.style.top = `${y - popoverHeight - 10}px`;
  popover.style.left = `${x - (popoverWidth - width) / 2}px`;
});
