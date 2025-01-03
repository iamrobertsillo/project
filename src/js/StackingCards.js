import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class StackingCards {
  constructor(containerSelector, cardClass) {
    this.wrapper = document.querySelector('.pinned__stacking-cards');
    this.container = document.querySelector(containerSelector);
    this.cards = this.container ? gsap.utils.toArray(`.${cardClass}`) : [];
    this.spacer = 20;
    this.minScale = 0.8;
    this.distributor = gsap.utils.distribute({ base: this.minScale, amount: 0.2 });
    this.init();
  }

  init() {
    if (!this.container || this.cards.length === 0) {
      console.error("StackingCards: Nessun elemento trovato!");
      return;
    }

    this.cards.forEach((card, index) => {
      
      this.scaleVal = this.distributor(index, this.cards[index], this.cards);
      
      this.tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          markers: false,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: this.scaleVal
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * this.spacer} top`,
        endTrigger: this.wrapper,
        end: `bottom bottom`,
        pin: true,
        pinSpacing: false,
        markers: false,
        id: 'pin',
        invalidateOnRefresh: true,
      });
    });
  }

}

export default StackingCards;
