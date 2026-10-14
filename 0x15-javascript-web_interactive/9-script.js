document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    document.querySelector('#hello').textContent = data.hello;
  } catch (error) {
    document.querySelector('#hello').textContent = 'Could not load greeting.';
  }
});
