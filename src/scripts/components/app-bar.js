class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="hero">
        <a href="#main-content" class="skip-link">Menuju ke konten</a>
        <nav>
            <h1>Hyuresto</h1>
            <a href="#" class="hamburger-icon"><i class="fa fa-bars"></i></a>
            <ul id="drawer" class="menu-bar">
                <li><a href="#" class="close-icon"><i class="fa fa-times-circle"></i></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="#/Favorite">Favorite</a></li>
                <li><a href="https://github.com/ahmadWahyu7">About Us</a></li>
            </ul>
        </nav>
        <div class="hero-title">
            <h2><span>HYURESTO</span></h2>
            <p>Cari dan Temukan Restoran Terbaik di Daerahmu!</p>
        </div>
    </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
