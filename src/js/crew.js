import images from '../data/crew_images.json';
const wrapper = document.querySelector('#crew-wrapper');
const load_btn = document.querySelector('#load-more');
const limit = 5;
let page = 1;
let duty = '';

let members = [];

let filtered = (duty) => {
    return members.filter(member => {
        return member.duty_slugs.some(d => {
            return d == duty;
        })
    })
};

function getCrewData(p, l, d) {
    let xhr = new XMLHttpRequest;
    let url = `https://challenge-api.view.agentur-loop.com/api.php?page=${p}&limit=${l}`;

    xhr.open('GET', url, true);

    xhr.onerror = (error) => {
        wrapper.innerHTML = 
        `<div class="error">
            <p class="error__msg">Oops! An error occurred.</p>
            <h4>Crew info is currently unavailable</h4>
         </div>
        `
        load_btn.style.display = 'none';
    }

    xhr.onload = () => {
        const result = JSON.parse(xhr.response).data;
        if(xhr.status == 200) {
            result.data.forEach(member => {
                members.push(member);
            }) 

            members.forEach(member => {
                member.image = images[members.indexOf(member)];
            })
            d !== '' ? renderCrewMembers(filtered(d)) : renderCrewMembers(members);
        }
    }

    xhr.send();
}

load_btn.addEventListener('click', () => {
    page++;
    getCrewData(page, limit, duty);
})

document.querySelectorAll('.crew__filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.crew__filter-btn--active').classList.remove('crew__filter-btn--active');
        btn.classList.add('crew__filter-btn--active');

        if(btn.id !== 'all'){
            duty = btn.id
            renderCrewMembers(filtered(duty))
            return;
        } 

        duty = ''; 
        renderCrewMembers(members);
    })
})

function renderCrewMembers(members) {
    wrapper.innerHTML = ''
    members.forEach(member => {
        let { name, image, duties } = member;
        const new_member = document.createElement("div");
        new_member.setAttribute("class", "crew__member");

        new_member.innerHTML = 
        `<div class="crew__img-container">
            <img src="${image}" alt="${name}" class="crew__member-img">
        </div>
            <div class="crew__member-info">
            <div class="displaced"><h3 class="crew__member-name">${name}</h3></div>
            <div class="displaced"><h4 class="crew__member-duty">${duties}</h4></div>
            <div class="displaced"><p class="crew__member-bio">Lorem ipsum sit dolor amet</p></div>
        </div>
        `

        wrapper.appendChild(new_member);
        setHeight();
    })
}

function setHeight(){
    wrapper.querySelectorAll('.crew__img-container').forEach(card => {
        card.style.height = card.offsetWidth + 'px';
    })
}

getCrewData(page, limit, duty);

window.addEventListener('resize', setHeight)