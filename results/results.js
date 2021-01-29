const ul = document.querySelector('ul');
import { determineHealth } from './resultsutils.js';
const userResults = JSON.parse(localStorage.getItem('USER'));


// Dont really need this

const resultName = document.createElement('li');
const resultJob = document.createElement('li');
const resultRace = document.createElement('li');
const resultHealth = document.createElement('li');
const resultWealth = document.createElement('li');


resultName.textContent = `Name: ${userResults.name}`;
resultJob.textContent = `Job: ${userResults.job}`;
resultRace.textContent = `Race: ${userResults.race}`;
resultHealth.textContent = `Health: ${userResults.hp}`;
resultWealth.textContent = `Gold: ${userResults.gold}`;


const test = determineHealth(userResults);

ul.append(test, resultName, resultJob, resultRace, resultHealth, resultWealth);
