class DashboardPage {
  widgetall() {
    return cy.get(".oxd-grid-3.orangehrm-dashboard-grid");
  }
}

export default new DashboardPage();
