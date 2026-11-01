const addItem = document.querySelector('#add_item');
addItem.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Item';
  document.querySelector('ul.my_list').appendChild(newItem);
});
