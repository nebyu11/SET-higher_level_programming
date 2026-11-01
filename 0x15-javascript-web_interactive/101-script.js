document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];
  const listElement = document.querySelector('ul.my_list');

  function render () {
    listElement.textContent = '';
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      listElement.appendChild(listItem);
    });
  }

  document.querySelector('#add_item').addEventListener('click', () => {
    items.push('Item');
    render();
  });

  document.querySelector('#remove_item').addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  document.querySelector('#clear_list').addEventListener('click', () => {
    items = [];
    render();
  });
});
