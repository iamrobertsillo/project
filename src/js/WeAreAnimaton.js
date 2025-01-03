import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class WeAreAnimaton {
  constructor(textClass) {
    this.image = document.querySelector('.animated_image')
    this.texts = document.querySelectorAll(textClass);
    this.init()
  }

  init() {
    this.texts.forEach( (text, i) => {
      this.scale = 5.5;

      if ( i === 0 ) {
        gsap.set(text, {
          scale: this.scale,
          x: '25vw',
          y: '25vw'
        })
      }
      if ( i === 1 ) {
        gsap.set(text, {
          scale: this.scale,
          x: '60vw',
          y: '35vw'
        })
      }
      
      gsap.set(this.image, {
        scale: .35,
        x: '0',
        y: '0'
      })

      if ( i === 0 ) {
        gsap.to(text, {
          scale: 1,
          x: '0px',
          y: 0,
          duration: 1.5,
          delay: 1.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.animated',
            start: 'top 80%',
            end: 'bottom top',
            scrub: false,
            markers: true
          }
        })
      }

      if ( i === 1 ) {
        gsap.to(text, {
          scale: 1,
          x: '0px',
          y: 0,
          duration: 1.5,
          delay: 1.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.animated',
            start: 'top 80%',
            end: 'bottom top',
            scrub: false,
            markers: true
          }
        })
      }

      gsap.to(this.image, {
        scale: 1,
        duration: 1.5,
        delay: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.animated',
          start: 'top 80%',
          end: 'bottom top',
          scrub: false,
          markers: true
        }
      })

    })
  }
}

export default WeAreAnimaton;