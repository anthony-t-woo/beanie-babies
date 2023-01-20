/* Imports */
import { getBabies, getSigns } from './fetch-utils.js';
import { renderBaby, renderSignOption } from './render-utils.js';
/* Get DOM Elements */
const babiesListEl = document.querySelector('.babies-list');
const searchFormEl = document.querySelector('#user-form');
const signSelectEl = document.querySelector('#sign-options');

/* State */
let babiesData = [];
let signsData = [];
/* Events */
// On Page Load
window.addEventListener('load', async () => {
    // load and display all beanie babies
    const queriedBabies = await getBabies();
    babiesData = queriedBabies;
    displayBabies();
    // load and display astrological sign options
    const queriedSigns = await getSigns();
    signsData = queriedSigns;
    displaySignOptions();
});

// On Form Submit
searchFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(searchFormEl);
    const queriedBabies = await getBabies(formData.get('sign-selection'));
    babiesData = queriedBabies;
    displayBabies();
});

/* Display Functions */
function displayBabies() {
    babiesListEl.textContent = '';
    for (let baby of babiesData) {
        const babyEl = renderBaby(baby);
        babiesListEl.append(babyEl);
    }
}

function displaySignOptions() {
    for (let sign of signsData) {
        const signEl = renderSignOption(sign);
        signSelectEl.append(signEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
