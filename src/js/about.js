import json from '../data/founders.json';
import { sliderControls } from './slider';

const about_slider = document.querySelector('#a-slider');

json.forEach(founder => {
    let {name, role, bio, image} = founder;
    about_slider.innerHTML +=
    `<div class="slider__slide">
        <div class="slider__img-container">
            <img src="${image}" alt="${name} - ${role}" class="slider__img">
        </div>
        <div class="slider__about-info">
            <h3 class="slider__name">${name}</h3>
            <h4 class="slider__role">${role}</h4>
            <p class="slider__bio">${bio}</p>
        </div>
    </div>
    `
})

sliderControls(about_slider);

