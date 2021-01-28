// import functions and grab DOM elements
const form = document.querySelector('form');
// import { job, race } from './data.js';
// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        job: formData.get('job'),
        race: formData.get('race'),
        hp: 60,
        gold: 10,
        completed: {},
    };
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './map';
});