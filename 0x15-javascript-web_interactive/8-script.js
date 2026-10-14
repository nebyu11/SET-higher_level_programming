const fetchMovies = async () => {
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    const list = document.querySelector('#list_movies');
    data.results.forEach((film) => {
      const li = document.createElement('li');
      li.textContent = film.title;
      list.appendChild(li);
    });
  } catch (error) {
    const li = document.createElement('li');
    li.textContent = 'Could not load movies.';
    document.querySelector('#list_movies').appendChild(li);
  }
};

fetchMovies();
