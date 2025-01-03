
import MenuAnimation from './MenuAnimation.js';
import ImageScaleOnScroll from './ImageScale.js';
import TextAnimation from './TextReveal.js'
import BlurEffect from './BlurAnimation.js'
import StackingCards from './StackingCards.js'
import ScrollHeader from './ScrollHeader';
import WeAreAnimaton from './WeAreAnimaton.js';

window.addEventListener('load', () => {
  const menuAnimation = new MenuAnimation();
  const menuTrigger = document.querySelector('[data-attribute="menu-trigger"]');
  
  const menuButtonClose = document.querySelector('.button--menu-close');
  
  // Gestisci l'animazione di apertura
  // menuTrigger.addEventListener('click', () => {
  //   const timelineIn = menuAnimation.in();
  //   timelineIn.play();
  // });
  
  // Gestisci l'animazione di chiusura
  // menuButtonClose.addEventListener('click', (e) => {
  //   const timelineOut = menuAnimation.out();
  //   timelineOut.play();
  // });

  /** Scroll Header */
  new ScrollHeader('.header');

  /** Stacking Cards */
  new StackingCards("#stacking-cards-container", "card");

  /** Image scaling */
  new ImageScaleOnScroll();

  /* ANIMATING TEXT */
  new TextAnimation('.reveal-it')

  /** Blur effect */
  new BlurEffect('.blur-element');

  /** WeARE Animation */
  new WeAreAnimaton('.animated_text')
})
