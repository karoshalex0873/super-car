// animation.js
import { gsap } from 'gsap';

const animateModelOnLoad = () => {
  const tl = gsap.timeline();

  // Example animation: rotate the model
  tl.from('.model', {
    duration: 1,
    rotationY: 90, // Rotate 90 degrees
    ease: 'power2.out', // Example easing function
  });

  // Add more animations as needed
  
  return tl;
};

export default animateModelOnLoad;
