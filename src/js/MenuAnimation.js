import { gsap } from 'gsap';

class MenuAnimation {
  constructor() {
    this.isOpen = false;
    this.DOM = {
      menuElement: document.querySelector('.menu__overlay'),
      menuRows: document.querySelectorAll('.menu__row'),
      menuImage: document.querySelector('.menu__image'),
      menuUnits: document.querySelectorAll('.menu__unit'),
      menuLinks: document.querySelectorAll('.menu__link'),
    };

    this.timelineIn = gsap.timeline({ paused: true });
    this.timelineOut = gsap.timeline({ paused: true });

    this.init();

  }

  init() {
    // Imposta stato iniziale per GSAP
    // gsap.set(this.DOM.menuLinks, { y: 25, opacity: 0 });
    // gsap.set(this.DOM.menuUnits, { scaleX: 1 });
    // gsap.set(this.DOM.menuElement, { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" });
  }

  toggle() {
    if (this.isOpen) {
      this.out().play();
    } else {
      this.in().play();
    }
    this.isOpen = !this.isOpen;
  }

  in() {
    // Animazione di apertura
    this.timelineIn
      .to(this.DOM.menuElement, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(this.DOM.menuUnits, {
        scaleX: 0,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.1,
      }, "-=0.3")
      .to(this.DOM.menuLinks, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
      }, "<");

    return this.timelineIn;
  }

  out() {
    // Animazione di chiusura
    this.timelineOut
      .to(this.DOM.menuLinks, {
        y: -25,
        opacity: 0,
        stagger: 0.05,
        ease: "power4.in",
      })
      .to(this.DOM.menuUnits, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.1,
      })
      .to(this.DOM.menuElement, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.3")
      .set(this.DOM.menuElement, { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" });

    return this.timelineOut;
  }
}

export default MenuAnimation;
