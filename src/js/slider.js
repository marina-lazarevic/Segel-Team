export function sliderControls(slider) {
    let id = slider.id;
    slider.innerHTML += 
    `<div class="slider__controls">
        <button class="slider__btn" id="${id}-prev">
        <svg xmlns="http://www.w3.org/2000/svg" class="slider__arrow-icon" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/>
        </svg>
        </button>
        <button class="slider__btn" id="${id}-next">
        <svg xmlns="http://www.w3.org/2000/svg" class="slider__arrow-icon" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/>
        </svg>
        </button>
    </div>
    `

    let slides = slider.querySelectorAll('.slider__slide');
    let i = 0;
    slides[i].classList.add('slider__slide--active');

    slider.querySelectorAll('.slider__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            slides[i].classList.remove('slider__slide--active');
            btn.id.includes('next') ?
            (i < slides.length - 1 && i++) :
            (i > 0 && i--)

            slides[i].classList.add('slider__slide--active')
        })
    })
}