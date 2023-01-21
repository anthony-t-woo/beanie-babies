/* Imports */
import { getBabies, getSigns } from './fetch-utils.js';
import { renderBaby, renderSignOption } from './render-utils.js';
/* Get DOM Elements */
const babiesListEl = document.querySelector('.babies-list');
const searchFormEl = document.querySelector('#user-form');
const signSelectEl = document.querySelector('#sign-options');
const searchInfoEl = document.querySelector('#search-info');

/* State */
let babiesData = [];
let signsData = [];
/* Events */
// On Page Load
window.addEventListener('load', async () => {
    // load and display all beanie babies
    findBabies();
    // load and display astrological sign options
    const queriedSigns = await getSigns();
    signsData = queriedSigns;
    displaySignOptions();
});

// On Form Submit - feeds user selection as an argument to call findBabies function
searchFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchFormEl);
    findBabies(formData.get('sign-selection'));
});

// find babies function - calls getBabies function to request dataset based on argument
async function findBabies(sign) {
    const queriedBabies = await getBabies(sign);
    // assigns queried data to state so that they can be accessed by displayBabies()
    babiesData = queriedBabies;
    displayBabies();
    displayCount();
}

/* Display Functions */
// clears dom and then loops through babiesData in state to render an HTML element and appends to babiesListEl
function displayBabies() {
    babiesListEl.textContent = '';
    for (let baby of babiesData) {
        const babyEl = renderBaby(baby);
        babiesListEl.append(babyEl);
    }
}

// loops through signsData in state to render an HTML element and appends to signSelectEl
function displaySignOptions() {
    for (let sign of signsData) {
        const signEl = renderSignOption(sign);
        signSelectEl.append(signEl);
    }
}

function displayCount() {
    searchInfoEl.textContent = '';
    const resultsCountEl = document.createElement('p');
    resultsCountEl.classList.add('results-count');
    resultsCountEl.textContent = `Total Results: ${babiesData.length}`;
    searchInfoEl.append(resultsCountEl);
}
// (don't forget to call any display functions you want to run on page load!)
