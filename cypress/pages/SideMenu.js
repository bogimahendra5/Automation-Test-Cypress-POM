class SideMenu {
  // Active Side Menu
  Active() {
    return cy.get(".oxd-main-menu-item.active");
  }
  ActiveToggle() {
    return cy.get(".oxd-main-menu-item.active.toggle");
  }

  // Locator Side Menu
  SearchInput() {
    return cy.get("input[placeholder='Search']");
  }
  Admin() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)"
    );
  }
  PIM() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"
    );
  }
  Leave() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)"
    );
  }
  Time() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
    );
  }
  Recruitment() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)"
    );
  }
  MyInfo() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)"
    );
  }
  Performance() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1)"
    );
  }
  Dashboard() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(8) > a:nth-child(1)"
    );
  }
  Directory() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)"
    );
  }
  Maintance() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1)"
    );
  }
  Claim() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(11) > a:nth-child(1)"
    );
  }
  Buzz() {
    return cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(12) > a:nth-child(1)"
    );
  }
}

export default new SideMenu();
