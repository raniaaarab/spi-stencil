import { Component } from "@stencil/core";


@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              <strong>SPI-ADM</strong>
            </span>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>






          <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
            <div class="navbar-start">
              <span class="navbar-item">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link" href="/enseignants">
                    <i class="fas fa-user"></i>

                    Enseignant
                </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="/enseignants/add"><span class="panel-icon">
                      <i class="fas fa-plus-square" aria-hidden="true"></i>
                    </span>Ajouter</a>

                    <a class="navbar-item" href="/enseignants/email"><span class="panel-icon">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </span>Rechercher Par Email</a>
                    <a class="navbar-item" href="/enseignants/nom"><span class="panel-icon">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </span>Rechercher Par Nom</a>

                  </div>
                </div>
              </span>
            </div>


            <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
              <div class="navbar-start">
                <span class="navbar-item">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/formations">
                      <i class="fas fa-book-reader"></i>

                      Formation
                </a>
                    <div class="navbar-dropdown">
                      <a class="navbar-item" href="/formations/add"><span class="panel-icon">
                      <i class="fas fa-plus-square" aria-hidden="true"></i>
                    </span>Ajouter</a>
                      
                      <a class="navbar-item" href="/formations/nom"><span class="panel-icon">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </span>Rechercher Par Nom</a>
                    </div>
                  </div>
                </span>
              </div>



              <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
                <div class="navbar-start">
                  <span class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link" href="/enseignants">
                        <i class="fas fa-graduation-cap"></i>

                        Promotion
                </a>

                    </div>
                  </span>
                </div>
              </div>




              <div id="navbar-content" class="navbar-menu" ref={el => (this.menu = el)}>
                <div class="navbar-start">
                  <span class="navbar-item">

                    <a href="/">
                      <i class="fas fa-home"></i>

                      Home
                </a>


                  </span>

                </div></div>
            </div>

          </div>
        </div>
      </nav>
    );
  }
}
