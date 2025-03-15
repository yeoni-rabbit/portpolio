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


const yeon_02 = gsap.timeline();
yeon_02.from ('.section02 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
yeon_02.from('.section02 .chart > div',{y:30,opacity:0}),
yeon_02.to('.section02 .deco01',{width:272}),
yeon_02.to('.section02 .chart .deco02',{scale:1,ease:"back.inOut(1.7)"}),

 

 ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: '70% center',
  animation: yeon_02,
  // markers:true,
  scrub: true,
})



const yeon_03 = gsap.timeline();
 yeon_03.from('.section03 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
 yeon_03.from('.section03 .question01 > div',{duration:1, stagger:0.2,y:30,opacity:0}),
 yeon_03.from('.section03 .question02 > div',{stagger:0.2,y:30,opacity:0}),

 ScrollTrigger.create({
  trigger: '.section03',
  start: 'top center',
  end: '70% center',
  animation: yeon_03,
  // markers:true,
  scrub: true,
})





// ScrollTrigger.create({
//   trigger: '.section03',
//   start: 'top bottom',
//   end: '50% bottom',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.section03 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
//   // toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   // markers: true,
//   scrub: true,
// })

// ScrollTrigger.create({
//   trigger: '.section03',
//   start: 'top center',
//   end: '80% bottom',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.section03 .question01 > div',{stagger:0.2,y:30,opacity:0}),
//   // toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   // markers: true,
//   scrub: true,
// })


// ScrollTrigger.create({
//   trigger: '.section03',
//   start: 'top top',
//   end: '60% center',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.section03 .question02 > div',{stagger:0.1,y:30,opacity:0}),
//   // toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   // markers: true,
//   scrub: true,
// })

// ScrollTrigger.create({
//   trigger: '.section04',
//   start: '-500 top',
//   end: '+=1000',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.section04 .cover',{width:'30vw',height:'50px',opacity:0}),
//   // toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   markers: true,
//   scrub: true,
// })
ScrollTrigger.create({
  trigger: '.section04',
  start: 'top center',
  end: '+=1000',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section04 .cover',{width:'30vw',height:'50px',opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})






const yeon_05 = gsap.timeline();
 yeon_05.from('.section05 .userReaserch .titleGroup',{stagger:0.1, y:300,opacity:0}),
 yeon_05.from('.section05 .graphBox > div',{duration:1, stagger:0.3,y:300,opacity:0}),

ScrollTrigger.create({
  trigger: '.section04',
  start: 'center 80%',
  // end: '80% 50%',
  animation: yeon_05,
  // toggleActions: 'restart reverse restart reverse',
  // markers: true,
  scrub: true,
})





// ScrollTrigger.create({
//   trigger: '.section05',
//   start: 'top 90%',
//   end: 'center center',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.section05 .userReaserch .titleGroup',{stagger:0.1, y:300,opacity:0}),
//   toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   // markers: true,
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
  end: 'bottom bottom',
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
  end: 'bottom bottom',
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
  end: 'bottom bottom',
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
  end: 'bottom bottom',
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
  trigger: '.section08',
  start:'80% center',
  // end: '60% center',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section09 .inner > img',{duration:1, y:300,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




















ScrollTrigger.create({
  trigger: '.section10',
  start: 'top center',
  // end: 'bottom bottom',
  animation: gsap.to('.section10 .mainphone .circleDeco .img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  // animation: gsap.from('.overDeco_eyes',{y:300,opacity:0}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})





const yeon_11 = gsap.timeline();
yeon_11.from('.section11 .titleGroup .title01 > img',{y:300,opacity:0})
yeon_11.from('.section11 .topMainContent img',{y:300,opacity:0})
yeon_11.from('.bottomContent .bottomMainContent > div',{duration:1, stagger:0.3,y:300,opacity:0})
 
 
 
 ScrollTrigger.create({
   trigger: '.section11',
   start: '-1000 30%',
  //  end: 'bottom 90%',
   animation: yeon_11,
   // toggleActions: 'restart reverse restart reverse',
   // pin: false,
   // pinSpacing: false,
  //  markers: true,
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


const yeon_12 = gsap.timeline();
 yeon_12.from('.section12 .title img',{stagger:0.1,y:30,opacity:0}),
 yeon_12.from('.section12 .mainContent > div',{stagger:0.1,y:30,opacity:0}),
 yeon_12.from('.section12 .mainContent .stateDeco > img',{ x:200,scale:0.7,opacity:0}),
 yeon_12.from('.section12 .mainContent .PopupCard img',{duration:1, stagger:0.2,y:30,opacity:0}),
//  yeon_12.from('.section12 .question02 > div',{stagger:0.2,y:30,opacity:0}),


 ScrollTrigger.create({
  trigger: '.section12',
  start: 'top center',
  end: 'bottom bottom',
  animation: yeon_12,
  markers:true,
  scrub: true,
})








// ScrollTrigger.create({
//   trigger: '.section12',
//   start: '10% 60%',
//   end: 'bottom bottom',
//   // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
//   animation: gsap.from('.mainContent .PopupCard > div',{stagger:0.1, y:300,opacity:0}), 
//   toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   // markers: true,
//   scrub: true,
// })

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





