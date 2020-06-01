import chai from "chai";
import countBy from "../src/countBy.js";
const expect = chai.expect;

describe("countBy", () => {
  var users;
  before(function () {
    users = [
      { user: "barney", active: true },
      { user: "betty", active: true },
      { user: "fred", active: false },
    ];
  });
  it("correctly counts shallow objects", () => {
    expect(countBy(users, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
  });
});
