import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

gsap.registerPlugin(ScrollTrigger);


class TextAnimation {
  constructor(selector) {
    this.selector = selector; // classe o data attribute
    this.init();
  }

  init() {
    // Splitting per dividere il testo in lettere
    const elements = document.querySelectorAll(this.selector);

    elements.forEach((element) => {
      // Utilizza Splitting.js per dividere il testo
      Splitting({ target: element, by: 'words' });

      const chars = element.querySelectorAll('.word'); // Seleziona le lettere

      // Imposta lo stato iniziale delle lettere
      gsap.set(chars, {
        y: 50, // partenza dal basso
        opacity: 0,
        scale: 0.8, // leggera rotazione
      });

      // Configurazione dell'animazione con ScrollTrigger
      gsap.to(chars, {
        y: 0, // torna alla posizione normale
        opacity: 1,
        scale: 1,
        stagger: 0.1, // tempo tra le animazioni delle lettere
        duration: 0.6, // durata dell'animazione
        ease: "expo", // easing per rendere l'animazione fluida
        scrollTrigger: {
          trigger: element, // elemento che attiva lo scroll trigger
          start: "top 80%", // inizio dell'animazione quando il top dell'elemento raggiunge il 80% della viewport
          toggleActions: "play none none reverse", // azioni da eseguire al trigger
          markers: true
        },
      });
    });
  }
}

export default TextAnimation;

// Utilizzo della classe
// Esempio: new TextAnimation('.animated-text');
// oppure: new TextAnimation('[data-animate="letters"]');
