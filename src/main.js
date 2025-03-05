import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);







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
  trigger: '.section03',
  start: 'top center',
  end: '50% bottom',
  // animation: gsap.to('.overDeco_circle img',{duration:1,stagger:0.2,scale:1,ease:"back.inOut(1.7)"}),
  animation: gsap.from('.section03 .titleGroup > div',{stagger:0.1,y:30,opacity:0}),
  // toggleActions: 'restart reverse restart reverse',
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})






















markers()





