import gsap from "gsap"; 

let intro_timeline = gsap.timeline({defaults: {ease: 'power3.easeOut'}})
intro_timeline
    .to('.intro__banner-img', {scale: 1, duration: 15})