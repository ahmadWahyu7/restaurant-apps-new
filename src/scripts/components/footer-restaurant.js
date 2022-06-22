class FooterRestaurant extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Submission Kelas Belajar Front End Web Expert</p>
        <p>Ahmad Wahyu Pratama</p>
        <p>Dicoding Indonesia</p>
      `;
  }
}

customElements.define('footer-resto', FooterRestaurant);
