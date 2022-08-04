import gsap from "gsap";

const nav_btn = document.querySelector('#nav-btn')
const nav = document.querySelector('#nav');

let nav_timeline = gsap.timeline({defaults: {duration: .3, ease: 'power3.easeOut'}});
nav_timeline
    .to(nav, {top: 0, duration: .4})
    .to('.nav__displaced', {translateY: 0, stagger: -0.1})
    .reverse();

let btn_timeline = gsap.timeline({defaults: {duration: .3, ease: 'power3.easeOut'}});
btn_timeline
    .to('.nav-btn__bar:nth-of-type(2)', {width: 0})
    .to('.nav-btn__bar:nth-of-type(1)', {rotate: 45, x: 1, y: 9})
    .to('.nav-btn__bar:nth-of-type(3)', {rotate: -45, x: 1, y: -9, delay: -0.3})
    .to(nav_btn, {rotate: 90})
    .reverse();

nav_btn.addEventListener('click', reverseTimeline);

document.querySelectorAll('.nav__anchor').forEach(anchor => {
    anchor.addEventListener('click', () => {
        window.innerWidth < 1280 && reverseTimeline();
    })
})

function reverseTimeline() {
    btn_timeline.reversed(!btn_timeline.reversed());
    nav_timeline.reversed(!nav_timeline.reversed());
}