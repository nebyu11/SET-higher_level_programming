document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];

  const render = () => {
    const list = document.querySelector('ul.my_list');
    list.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  };

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

  render();
});
