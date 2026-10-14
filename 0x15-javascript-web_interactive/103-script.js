document.addEventListener('DOMContentLoaded', () => {
  const langInput = document.querySelector('#language_code');
  const helloDiv = document.querySelector('#hello');

  const translate = async () => {
    const langCode = langInput.value.trim();
    if (!langCode) {
      helloDiv.textContent = 'Please enter a language code.';
      return;
    }
    try {
      const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${langCode}`);
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Could not load greeting.';
    }
  };

  document.querySelector('#btn_translate').addEventListener('click', translate);

  langInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      translate();
    }
  });
});
