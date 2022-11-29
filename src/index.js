import './style.css';
import { getAllAstronauts } from './modules/helper.js';

const closeDemo = document.querySelector('.close');
closeDemo.addEventListener ('click', () =>{
  document.getElementById('overlay-project').style.display = 'none';
});


window.addEventListener('DOMContentLoaded', () => {
  getAllAstronauts();
});

