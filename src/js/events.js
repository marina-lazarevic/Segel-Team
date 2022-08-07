import json from '../data/events.json';
import { fillModal } from './modal';
import { m_slider } from './modal';
import { sliderControls } from './slider';

const events = document.querySelector('#events');

json.forEach(event => {
    let {date, title, article } = event;

    (json.indexOf(event) + 1) % 3 === 0 ?
    events.innerHTML += 
    `<div class="event event--lg">
        <p class="event__date">${date}</p>
        <a href="#" class="event__title">${title}</a>
        <p class="event__summary">${article[0].slice(0, 76)}...</p>
    </div>` :
    events.innerHTML += 
    `<div class="event event--sm">
        <div class="date-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24" class="date-wrapper__icon">
                <path d="M.563,9H20.438A.564.564,0,0,1,21,9.563V21.75A2.251,2.251,0,0,1,18.75,24H2.25A2.251,2.251,0,0,1,0,21.75V9.563A.564.564,0,0,1,.563,9ZM21,6.938V5.25A2.251,2.251,0,0,0,18.75,3H16.5V.563A.564.564,0,0,0,15.938,0H14.063A.564.564,0,0,0,13.5.563V3h-6V.563A.564.564,0,0,0,6.938,0H5.063A.564.564,0,0,0,4.5.563V3H2.25A2.251,2.251,0,0,0,0,5.25V6.938A.564.564,0,0,0,.563,7.5H20.438A.564.564,0,0,0,21,6.938Z"/>
            </svg>
            <h4 class="date-wrapper__date">${date}</date>
        </div>
        <a href="#" class="event__title">${title}</a>
        <p class="event__summary">${article[0].slice(0, 76)}...</p>
    </div>`
})

let card = events.querySelectorAll('.event');
for(let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        fillModal(json[i])
        sliderControls(m_slider);
    })
}
