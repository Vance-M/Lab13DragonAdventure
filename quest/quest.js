import questData from './questData.js';
import { findById } from '../utils.js';
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(questData, questId);
h2.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;

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
form.appendChild(button);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // function?
    const formData = new FormData(form);
    const choiceId = formData.get('choices');
    const choice = findById(quest.choices, choiceId);
    const user = JSON.parse(localStorage.getItem('USER'));
    user.hp += choice.hp;
    user.gold += choice.gold;
    user.completed[questId] = true;
    // 
    localStorage.setItem('USER', JSON.stringify(user));
    window.location = '../map';
});