import './style.css';
import { getAllAstronauts } from './modules/helper.js';

const closeDemo = document.querySelector('.close');
closeDemo.addEventListener('click', () => {
  document.getElementById('overlay-project').style.display = 'none';
  document.getElementById('comments-data').innerHTML = '';
});

window.addEventListener('DOMContentLoaded', () => {
  getAllAstronauts();
});
