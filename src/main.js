import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);






// y -300이런것도있음
ScrollTrigger.create({
  trigger: '.section02',
  start: 'top 20%',
  // end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.overDeco_eyes img',{y:300,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
})


ScrollTrigger.create({
  trigger: '.section02',
  start: 'top 20%',
  // end: 'bottom bottom',
  animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  // animation: gsap.from('.overDeco_eyes',{y:300,opacity:0}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
})

// 너무 빨리나와요
ScrollTrigger.create({
  trigger: '.section02',
  start: '20% 20%',
  end: 'bottom 50%',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section02 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})








const 소연0 = gsap.timeline();
소연0.from('.section02 .chart > div',{y:30,opacity:0}),
소연0.to('.section02 .deco01',{width:272}),

ScrollTrigger.create({
  trigger: '.section02',
  start: '30% top',
  end: 'bottom bottom',
  animation: 소연0,
  markers:true,
  scrub: true,
})











ScrollTrigger.create({
  trigger: '.section03',
  start: 'top bottom',
  end: '50% bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section03 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section03',
  start: 'top center',
  end: '80% bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section03 .question01 > div',{stagger:0.2,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})


ScrollTrigger.create({
  trigger: '.section03',
  start: 'top top',
  end: '60% center',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section03 .question02 > div',{stagger:0.1,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




ScrollTrigger.create({
  trigger: '.section04',
  start: '-500 top',
  end: '+=1000',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section04 .cover',{width:'30vw',height:'50px',opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})









ScrollTrigger.create({
  trigger: '.section05',
  start: 'top 90%',
  end: 'center center',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section05 .userReaserch .titleGroup',{stagger:0.1, y:300,opacity:0}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})


// ScrollTrigger.create({
//   trigger: '.section05',
//   start: 'top 90%',
//   end: '70% center',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.section05 .userReaserch .graphBox > div',{y:300,opacity:0}),
//   toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   markers: true,
//   scrub: true,
// })





ScrollTrigger.create({
  trigger: '.section05',
  start: 'top top',
  end: 'center center',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section05 .userInterview .titleGroup > div',{stagger:0.2,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




ScrollTrigger.create({
  trigger: '.section05',
  start: 'center 70%',
  // end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section05 .userInterview .opinionBox .box01',{y:500,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
ScrollTrigger.create({
  trigger: '.section05',
  start: 'center 70%',
  // end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section05 .userInterview .opinionBox .box02',{y:700,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
ScrollTrigger.create({
  trigger: '.section05',
  start: 'center 70%',
  // end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section05 .userInterview .opinionBox .box03',{y:500,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
ScrollTrigger.create({
  trigger: '.section05',
  start: 'center 70%',
  // end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section05 .userInterview .opinionBox .box04',{y:700,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section06',
  start: 'top center',
  end: 'bottom bottom',
  animation: gsap.to('.bottominner > div',{rotationY:360}),
  scrub: true,
})



ScrollTrigger.create({
  trigger: '.section06',
  start: 'top bottom',
  end: '50% bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section06 .section06-inner01 .titleGroup > div',{y:300,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section06',
  start:'top top',
  end: '60% center',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section06 .section06-inner02 .titleGroup02 > div',{y:300,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})







ScrollTrigger.create({
  trigger: '.section9',
  start: 'top 30%',
  // end: 'bottom 20%',
  animation: gsap.from('.inner > img',{opacity: 1, duration: 1, ease: "power2.out"}),
  // animation: gsap.from('.overDeco_eyes',{y:300,opacity:0}),
  toggleActions: 'play none none none',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})














ScrollTrigger.create({
  trigger: '.section10',
  start: 'top 20%',
  // end: 'bottom bottom',
  animation: gsap.to('.mainphone .circleDeco > div',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  // animation: gsap.from('.overDeco_eyes',{y:300,opacity:0}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




const 소연 = gsap.timeline();

소연.from('.section11 .titleGroup .title01 > img',{y:300,opacity:0})
소연.from('.bottomContent .bottomMainContent > div',{duration:1, stagger:0.3,y:300,opacity:0})



ScrollTrigger.create({
  trigger: '.section11',
  start: 'top center',
  end: '80% 80%',
  // animation: gsap.to('.bottomContent .bottomMainContent > div',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: 소연,
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})










markers()





