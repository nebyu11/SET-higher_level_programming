const updateHeader = document.querySelector('#update_header');
updateHeader.addEventListener('click', () => {
  document.querySelector('header').textContent = 'New Header!!!';
});
