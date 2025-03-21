import "../lib/smooth";
import "./styles/style.css";
import Typed from 'typed.js';
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
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
})


const yeon_02 = gsap.timeline();
yeon_02.from ('.section02 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
yeon_02.from('.section02 .chart > div',{y:30,opacity:0}),
yeon_02.to('.section02 .deco01',{width:272},'+=2'),
yeon_02.from('.section02 .chart .deco03',{scale:0,ease:"back.inOut(1.7)"},'<'),

 

 ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: '80% center',
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


const yeon_04 = gsap.timeline();
yeon_04.from('.section04 .cover',{width:'30vw',height:'50px',opacity:0})
yeon_04.from('.section04 .decoinsight01',{opacity:0,x:-30},'+=0.1')
yeon_04.from('.section04 .decoinsight02',{opacity:0,x:30},'<')

ScrollTrigger.create({
  trigger: '.section03',
  start: '70% center',
  end: '+=600',
  animation: yeon_04,
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
  end: '50% bottom',
  animation: gsap.to('.bottominner > div',{rotationY:180}),
  scrub: true,
})


ScrollTrigger.create({
  trigger: '.section06',
  start: 'top bottom',
  end: '50% bottom',
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
  animation: gsap.from('.section06 .section06-inner02 .titleGroup02 > div',{y:300,opacity:0}),
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
  animation: gsap.from('.section06 .section06-inner02 .leftinner > div',{x:-300,opacity:0}),
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
  animation: gsap.from('.section06 .section06-inner02 .rightinner > div',{x:300,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




ScrollTrigger.create({
  trigger: '.section07',
  start:'top center',
  end: 'bottom center',
  animation: gsap.to('.section07 .background',{width:'100vw'}),
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
  animation: gsap.from('.section10 .mainphone .circleDeco .img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})





const yeon_11 = gsap.timeline();
yeon_11.from('.section11 .titleGroup .title01 > img',{y:300,opacity:0})
yeon_11.from('.section11 .topMainContent img',{y:300,opacity:0})
// yeon_11.from('.section11 .phonedeco img',{x:1575,opacity:0})
yeon_11.to('.bottomContent .bottomMainContent > div',{duration:1, stagger:0.3,y:0,opacity:1})
 
 
 
 ScrollTrigger.create({
   trigger: '.section11',
   start: 'top center',
   end: 'bottom bottom',
   animation: yeon_11,
   // toggleActions: 'restart reverse restart reverse',
   // pin: false,
   // pinSpacing: false,
  //  markers: true,
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
  // markers:true,
  scrub: true,
})


// const yeon_13 = gsap.timeline();
// yeon_13.from('.section13 .content img',{y:300,opacity:0})
// // yeon_13.from('.section13 .leftphone img',{opacity:0,y:300},)
// // yeon_13.from('.section13 .phone02',{opacity:0,y:300},)


// ScrollTrigger.create({
//   trigger: '.section13',
//   start: 'top center',
//   end: 'bottom 90%',
//   animation: yeon_13,
//   markers:true,
//   scrub: true,
// })



ScrollTrigger.create({
  trigger: '.section13',
  start: 'top 70%',
  end: 'bottom bottom',
  animation: gsap.from('.section13 .content > div',{stagger:0.1, y:300,opacity:0}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




const yeon_14 = gsap.timeline();
yeon_14.from('.section14 .title img',{y:300,opacity:0})
yeon_14.from('.section14 .leftphone img',{opacity:0,y:300},)
yeon_14.from('.section14 .phone02',{opacity:0,y:300},)


ScrollTrigger.create({
  trigger: '.section14',
  start: 'top center',
  end: 'bottom bottom',
  animation: yeon_14,
  // markers:true,
  scrub: true,
})


const yeon_15 = gsap.timeline();
yeon_15.from('.section15 .content > div ',{y:200,opacity:0})
yeon_15.from('.section15 .phone01 .phone01_01 img',{opacity:0,y:100},)
yeon_15.from('.section15 .deco .card01 img',{scale:0,ease:"back.inOut(2)"})
yeon_15.from('.section15 .deco .card02 img',{scale:0,ease:"back.inOut(2)"}, '<')



ScrollTrigger.create({
  trigger: '.section15',
  start: 'top center',
  end: 'bottom bottom',
  animation: yeon_15,
  // markers:true,
  scrub: true,
})



ScrollTrigger.create({
  trigger: '.section15',
  start: '70% 70%',
  end: 'bottom bottom',
  animation: gsap.from('.section15 .phone01 .deco02 img',{scale:0,ease:"back.inOut(2)"}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})




const yeon_16 = gsap.timeline();
yeon_16.from('.section16 .phone img ',{y:300,opacity:0})
yeon_16.from('.section16 .deco02 img ',{scale:0,ease:"back.inOut(1.5)"})
yeon_16.from('.section16 .deco03 img ',{scale:0,ease:"back.inOut(1.5)"})

ScrollTrigger.create({
  trigger: '.section16',
  start: 'top center',
  end: 'bottom bottom',
  animation: yeon_16,
  // markers:true,
  scrub: true,
})




ScrollTrigger.create({
  trigger: '.section16',
  start: '80% 80%',
  // end: 'bottom bottom',
  animation: gsap.from('.section17 .deco img',{scale:0,ease:"back.inOut(2)"}), 
  toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})


const yeon_17 = gsap.timeline();
yeon_17.from('.section17 .title img ',{y:300,opacity:0})
yeon_17.from('.section17 .content img ',{stagger:0.1, y:300,opacity:0})


ScrollTrigger.create({
  trigger: '.section17',
  start: 'top center',
  end: 'bottom bottom',
  animation: yeon_17,
  // markers:true,
  scrub: true,
})


const yeon_18 = gsap.timeline();
yeon_18.from('.section18 .title img ',{y:300,opacity:0})
yeon_18.from('.section18 .mainContent .phone01 img ',{stagger:0.1, y:300,opacity:0})
yeon_18.from('.section18 .back > div ',{x:-300,opacity:0})
yeon_18.from('.section18 .mainContent .phone02 img ',{stagger:0.2, y:300,opacity:0})
yeon_18.to('.section18 .circle_back ',{height:800})
// yeon_18.from('.section18 .back > div ',{x:300,opacity:0})

ScrollTrigger.create({
  trigger: '.section18',
  start: 'top 80%',
  end: 'bottom bottom',
  animation: yeon_18,
  // markers:true,
  scrub: true,
})

// // 세로로 원이 사라락
// ScrollTrigger.create({
//   trigger: '.section18',
//   start: 'top center',
//   // end: 'bottom bottom',
//   animation: gsap.to('.section18 .circle_back img',{height:1317},'+=2'), 
//   toggleActions: 'restart reverse restart reverse',
//   // pin: false,
//   // pinSpacing: false,
//   // markers: true,
//   scrub: true,
// })




const yeon_19 = gsap.timeline();
yeon_19.from('.section19 .title > img ',{y:300,opacity:0})
yeon_19.from('.section19 .inner .leftContent > img ',{y:300,opacity:0})
yeon_19.from('.section19 .inner .leftContent .chips01 img ',{y:-100,opacity:0})
yeon_19.from('.section19 .inner .rightContent .card01 img ',{ scale:0,ease:"back.inOut(2)"})
yeon_19.from('.section19 .inner .rightContent .card02 img ',{scale:0,ease:"back.inOut(2)"})
yeon_19.from('.section19 .inner .rightContent .card03 img ',{scale:0,ease:"back.inOut(2)"})
yeon_19.from('.section19 .inner .rightContent .card04 img ',{scale:0,ease:"back.inOut(2)"})
// 칩 위에서 아래로 떨어지는거
yeon_19.from('.section19 .inner .chips01 img ',{y:-300,opacity:0})
yeon_19.from('.section19 .inner .chips02 img ',{y:-300,opacity:0})


// duration:1,stagger:0.2,scale:1

ScrollTrigger.create({
  trigger: '.section19',
  start: 'top 70%',
  // end: 'bottom bottom', 끝나는걸 좀더 빠르지만? 느리게..
  animation: yeon_19,
  // markers:true,
  scrub: true,
})




const yeon_20 = gsap.timeline();
yeon_20.from('.section20 .title img ',{y:300,opacity:0})
yeon_20.from('.section20 .phone img ',{y:300,opacity:0})
yeon_20.from('.section20 .deco01 img ',{x:-300,opacity:0})
yeon_20.from('.section20 .deco02 img ',{x:-300,opacity:0})
yeon_20.from('.section20 .deco03 img ',{x:300,opacity:0})
yeon_20.from('.section20 .deco04 img ',{x:300,opacity:0})


ScrollTrigger.create({
  trigger: '.section20',
  start: 'top 70%',
  end: 'bottom bottom',
  animation: yeon_20,
  // markers:true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section21',
  start: 'top top',
  end: 'bottom bottom',
  // animation: yeon_20,
  onEnter(){
    var typed = new Typed('#element', {
      strings: ['THANK YOU'],
      typeSpeed: 50,
    })
  },
  // markers:true,
  scrub: true,
})















markers()





