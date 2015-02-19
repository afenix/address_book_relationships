describe("addressBook", function() {

  it("returns first name", function() {
    var person = { firstName: "Sylvia" };
      expect(person.firstName).to.equal("Sylvia");
  });

  it("returns last name", function() {
    var person = { firstName: "Sylvia", lastName: "Plath" };
      expect(person.lastName).to.equal("Plath");
  });

  it("returns address", function() {
    var person = { firstName: "Sylvia",
                    lastName: "Plath",
                     address: "987 Shady Lane" };
      expect(person.address).to.equal("987 Shady Lane")
  });

});
