const serviceUrl = 'https://hellosalut.stefanbohacek.dev/?lang=';

document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  const languageCode = document.querySelector('#language_code');
  const helloDiv = document.querySelector('#hello');

  async function fetchTranslation () {
    const lang = languageCode.value;
    try {
      const response = await fetch(`${serviceUrl}${lang}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error: Failed to fetch translation';
    }
  }

  btnTranslate.addEventListener('click', fetchTranslation);
  languageCode.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      fetchTranslation();
    }
  });
});
