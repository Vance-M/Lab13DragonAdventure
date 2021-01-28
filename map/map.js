import questData from '../quest/questdata.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));


let completedAllQuests = true;

for (let quest of questData) {

    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}


if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('questPos');
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

    li.append(a);
    ul.append(li);
}