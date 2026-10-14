document.addEventListener('DOMContentLoaded', () => {
  const translate = async () => {
    const langCode = document.querySelector('#language_code').value.trim();
    const helloDiv = document.querySelector('#hello');
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
});
