/* Imports */
import { getBabies } from './fetch-utils.js';
/* Get DOM Elements */
const babiesListEl = document.querySelector('.babies-list');
const searchFormEl = document.querySelector('#user-form');
const signSelectEl = document.querySelector('#sign-options');

console.log(babiesListEl);

/* State */
let babiesData = [];
let signsData = [];
/* Events */
// On Page Load
window.addEventListener('load', async () => {
    const response = await getBabies();
    babiesData = response;
    displayBabies();
});

/* Display Functions */
function displayBabies() {
    babiesListEl.textContent = '';
    for (let baby of babiesData) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        img.src = baby.image;
        h2.textContent = `Name: ${baby.title}`;
        p1.textContent = `Sign: ${baby.astroSign}`;
        p2.textContent = `Release Date: ${baby.birthday}`;

        li.append(h2, img, p1, p2);
        babiesListEl.append(li);
    }
}
// (don't forget to call any display functions you want to run on page load!)
