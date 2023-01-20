/* Imports */
import { getBabies } from './fetch-utils.js';
/* Get DOM Elements */
const babiesListEl = document.querySelector('.babies-list');
const searchFormEl = document.querySelector('#user-form');
const signSelectEl = document.querySelector('#sign-options');

/* State */
let babiesData = [];
let signsData = [];
/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
