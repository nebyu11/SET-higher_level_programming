const toggleHeader = document.querySelector('#toggle_header');
const header = document.querySelector('header');

toggleHeader.addEventListener('click', () => {
  if (header.classList.contains('red')) {
    header.classList.toggle('red');
    header.classList.toggle('green');
  } else if (header.classList.contains('green')) {
    header.classList.toggle('green');
    header.classList.toggle('red');
  }
});
