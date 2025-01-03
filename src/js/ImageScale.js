import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class ImageScaleOnScroll {
  constructor() {
    this.init();
  }

  init() {
    gsap.fromTo('.resize', 
      { scale: 1 }, // valore iniziale
      {
        scale: 0.7,
        opacity: 0.2, // valore finale
        scrollTrigger: {
          trigger: '.resize', // l'elemento da attivare
          start: 'top center', // quando inizia l'animazione
          end: 'bottom center', // quando finisce l'animazione
          scrub: true, // per avere un'animazione fluida
          markers: true
          // toggleActions: "play none none reverse" // per aggiungere comportamenti extra
        }
      }
    );
  }
}

export default ImageScaleOnScroll;
