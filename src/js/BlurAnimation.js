import { gsap } from 'gsap';

class BlurEffect {
  constructor(selector, blurAmount = 15, startTrigger = 'top 85%', endTrigger = 'top 35%', staggerAmount = 0.1) {
    this.selector = selector;
    this.blurAmount = blurAmount;
    this.startTrigger = startTrigger;
    this.endTrigger = endTrigger;
    this.staggerAmount = staggerAmount;
    this.init();
  }

  init() {
    gsap.fromTo(
      this.selector,
      {
        filter: `blur(${this.blurAmount}px)`,
      },
      {
        filter: 'blur(0px)',
        stagger: this.staggerAmount,
        scrollTrigger: {
          trigger: this.selector,
          start: this.startTrigger,
          end: this.endTrigger,
          scrub: true,
        },
        duration: 1,
      }
    );
  }
}

export default BlurEffect;