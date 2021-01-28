import questData from './questData.js';
import { findById } from '../utils.js';
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(questData, questId);

h2.textContent = questData.title;
p.textContent = questData.description;
img.src = `../assets/${questData.image}`;

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;
    
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.append(label);    
}
const button = document.createElement('button');

button.textContent = 'Submit';

