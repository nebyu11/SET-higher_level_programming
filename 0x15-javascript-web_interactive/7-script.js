const fetchCharacter = async () => {
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    document.querySelector('#character').textContent = data.name;
  } catch (error) {
    document.querySelector('#character').textContent = 'Could not load character.';
  }
};

fetchCharacter();
