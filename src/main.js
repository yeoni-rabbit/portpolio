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
  animation: gsap.from('.overDeco_eyes',{y:300,opacity:0}), 
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
ScrollTrigger.create({
  trigger: '.section02',
  start: '40% 10%',
  end: '80% center',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section02 .chart > div',{stagger:0.1,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})












ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section02 .background .chart .chart01 .deco02 > img ',{stagger:0.1,y:50,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
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





ScrollTrigger.create({
  trigger: '.section11',
  start: 'bottom 20%',
  end: '80% 80%',
  // animation: gsap.to('.bottomContent .bottomMainContent > div',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section11 .titleGroup .title01 > img',{y:300,opacity:0}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})









ScrollTrigger.create({
  trigger: '.section11',
  start: '20% 20%',
  end: '80% 80%',
  // animation: gsap.to('.bottomContent .bottomMainContent > div',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.bottomContent .bottomMainContent > div',{duration:1, stagger:0.3,y:300,opacity:0}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})





ScrollTrigger.create({
  trigger: '.section12',
  start: '10% 60%',
  end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.mainContent .stateDeco > img',{ x:300,scale:0.7,opacity:0}), 
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section12',
  start: '10% 60%',
  end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.mainContent .PopupCard > div',{stagger:0.1, y:300,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section13',
  start: '10% 60%',
  // end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section13 .content > div',{stagger:0.1, y:300,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section14',
  start: 'top 80%',
  end: 'bottom bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.content > div',{stagger:0.1, y:300,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})






markers()





