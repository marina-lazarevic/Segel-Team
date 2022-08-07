const modal = document.querySelector('#modal');
const m_date = document.querySelector('#m-date');
const m_title = document.querySelector('#m-title');
const m_subtitle = document.querySelector('#m-subtitle');
const m_article = document.querySelector('#m-article');
export const m_slider = document.querySelector('#m-slider');

export function fillModal(data){

    let {date, title, subtitle, article, images } = data;

    m_date.innerHTML = date;
    m_title.innerHTML = title;
    m_subtitle.innerHTML = subtitle;
    article.forEach(paragraph => {
        m_article.innerHTML += `<p class="modal__text">${paragraph}</p>`;
    });

    images.forEach(image => {
        m_slider.innerHTML += 
        `<div class="slider__slide">
            <img src="${image}" alt="${title}" class="slider__slide-img">
        </div>
        `
    })

    modal.style.display = 'block';
}


document.querySelector('#close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
    m_slider.innerHTML = '';
    m_article.innerHTML = '';
})