const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

async function fetchMovies () {
  const listMovies = document.querySelector('#list_movies');
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    data.results.forEach((movie) => {
      const listItem = document.createElement('li');
      listItem.textContent = movie.title;
      listMovies.appendChild(listItem);
    });
  } catch (error) {
    const errorItem = document.createElement('li');
    errorItem.textContent = 'Error: Failed to fetch movies';
    listMovies.appendChild(errorItem);
  }
}

fetchMovies();
