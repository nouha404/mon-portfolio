const txt = document.querySelectorAll('.images');
const tl1 = document.querySelector('.timeline1') 
const tl2 = document.querySelector('.timeline2') 
const tl3 = document.querySelector('.timeline3') 


const TL = gsap.timeline();
TL
.from(tl1, { x: -22,   duration: 0.3})
.to(tl2, {x : 130,  duration: 0.3})
.to(tl3, {x : 130,  duration: 0.3})



TL
.from(txt, {
    x : -350,
    opacity : 0,
    duration : 2,
    ease : 'back.out(1.7)',
    stagger : 0.4
})

const time1 = document.querySelector('.timeOne');
const time2 = document.querySelector('.timeTwo');


TL
.from(time1, {
    y : -50,
    duration : 0.3
})
.from(time2, {
    y : -50,
    duration : 0.3
})

const times = document.querySelectorAll('.times');


gsap.from(times, {
    y : '90vh',
    opacity : 0,
    duration : 1,
    stagger : 0.5
   
})
// TL
// .from(time3 , {
//     y : 200,
//     opacity : 0,
//     duration : 0.1
// })
// .from(time4 , {
//     y : 200,
//     opacity : 0,
//     duration : 0.1
// })

const timeline = document.querySelector('.timeline')
gsap.from(timeline, {
    x : -250,
    opacity : 0,
    duration : 0.4
})

const timelinework = document.querySelector('.timelinework'); 
gsap.from(timelinework, {
    x : -90,
    opacity : 0,
    stagger : 0.8
})
const whoswho = document.querySelector('.whoswho');

gsap.from(whoswho , {x : 330,  duration : 0.7})
