import questData from './questData.js';
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const img = document.querySelector('section img');
// const form = document.querySelector('form');

// const params = new URLSearchParams(window.location.search);

// const questId = params.get('id');

h2.textContent = questData.title;
p.textContent = questData.description;
img.src = `../assets/${questData.image}`;

