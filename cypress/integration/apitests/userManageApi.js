/// <reference types="cypress" />

describe("api test", () => {
  it("get method list users", () => {
    // cy.visit('https://reqres.in/')
    cy.request("GET", "https://reqres.in/api/users?page=2").then((item) => {
      console.log(item);
      // expect(item.body.data.id).to.equal(2)
      expect(item.status).to.equal(200);
      expect(item.body.data[0].first_name).to.equal("Michael");
    });
  });
  it("POST Create user", () => {
    const users = {
      name: "morpheus",
      job: "leader",
    };
    cy.request("POST", "https://reqres.in/api/users", users).then(
      (response) => {
        console.log(response);
        expect(response.body.name).to.equal(users.name);
      }
    );
  });
  it("Update users", () => {
    const user = {
      "name": "morpheus",
      "job": "zion resident",
      "country": "Russia"
    };
    cy.request("PUT", "https://reqres.in/api/user/2", user).then(response => {
        expect(response.body.country).to.equal(user.country)
    });
  });
  it('Delete user', () => {
      cy.request('DELETE', 'https://reqres.in/api/user/2').then(response => {
          console.log(response)
          expect(response.status).equal(204)
      })
  })
});
