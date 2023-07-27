import AdminPage from "../../pages/AdminPage";
import Login from "../../pages/LoginPage";
import SideMenu from "../../pages/SideMenu";

describe("Page Admin", () => {
  beforeEach(() => {
    cy.visit("/");
    Login.Login("Admin", "admin123");
    SideMenu.Admin().click();
    AdminPage.addBtn().click();
  });

  it("Verify direct to page add admin", () => {
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
    );
    AdminPage.cancelBtn().should("be.visible");
    AdminPage.saveBtn().should("be.visible");
    AdminPage.selectRole().should("be.visible");
  });

  it.only("Add Admin User", () => {
    AdminPage.addBtn().click();
    AdminPage.selectRoleStatus(AdminPage.roleAdmin, AdminPage.statusEnable);
    AdminPage.EmployeName("test");
    AdminPage.autoSuggest().contains("Orange Test").click();
  });
});
