class ScrollHeader {
  constructor(selector = '.header') {
    this.header = document.querySelector(selector); // Seleziona l'elemento
    this.lastScrollPosition = 0; // Per tracciare la posizione dello scroll precedente
    this.ticking = false; // Per limitare il numero di eventi scatenati
    this.init();
  }

  init() {
    if (!this.header) {
      console.error(`ScrollHeader: Nessun elemento trovato con il selettore "${selector}"`);
      return;
    }

    // Imposta la posizione iniziale
    this.header.style.transition = 'transform 0.3s ease';
    this.header.style.transform = 'translateY(0)';

    // Aggiungi il listener dello scroll
    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    const currentScrollPosition = window.scrollY; // Posizione corrente dello scroll

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.toggleHeader(currentScrollPosition);
        this.ticking = false;
      });
      this.ticking = true;
    }

    this.lastScrollPosition = currentScrollPosition; // Aggiorna la posizione dello scroll
  }

  toggleHeader(currentScrollPosition) {
    if (currentScrollPosition > this.lastScrollPosition) {
      // Scroll verso il basso - nascondi l'header
      this.header.style.transform = 'translateY(-100%)';
    } else {
      // Scroll verso l'alto - mostra l'header
      this.header.style.transform = 'translateY(0)';
    }
  }
}

export default ScrollHeader;