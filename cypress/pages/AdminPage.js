class AdminPage {
  // Menu Navigation Tab
  navTabVisited() {
    return cy.get(".oxd-topbar-body-nav-tab.--parent.--visited");
  }
  navTab() {
    return cy.get(".oxd-topbar-body-nav-tab.--parent");
  }

  // Button
  addBtn() {
    return cy.xpath("//button[normalize-space()='Add']");
  }
  resetBtn() {
    return cy.xpath("//button[normalize-space()='Reset']");
  }
  searchBtn() {
    return cy.get("button[type='submit']");
  }

  // Section Add User //
  // Select Role
  selectRole = () => cy.xpath("(//div[contains(text(),'-- Select --')])[1]");
  roleAdmin = () => cy.get("(//div[@role='option'])[2]");
  roleESS = () => cy.get("(//div[@role='option'])[3]");

  // Select Status
  selectStatus = () => cy.xpath("(//div[contains(text(),'-- Select --')])[2]");
  statusDisable = () => cy.get("(//div[@role='option'])[2]");
  statusEnable = () => cy.get("(//div[@role='option'])[3]");

  //Employe Name
  hintEmployee = () => cy.get("input[placeholder='Type for hints...']");
  autoSuggest = () => cy.xpath("//div[@role='listbox']//div[1]");

  inptUsername = () =>
    cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]");
  inptPassword = () => cy.xpath("(//input[@type='password'])[1]");
  inptConfirmPassword = () => cy.xpath("(//input[@type='password'])[2]");
  cancelBtn = () => cy.xpath("//button[normalize-space()='Cancel']");
  saveBtn = () => cy.get("button[type='submit']");

  // Method on Add User Section
  selectRoleStatus(role, status) {
    role = (role) => this.role(role);
    status = (status) => this.role(status);
    this.selectRole().click();
    this.role.click();
    this.selectRole().click();
    this.status.click();
  }

  EmployeName(name) {
    this.hintEmployee().type(name);
    this.autoSuggest().click();
  }
}
export default new AdminPage();
