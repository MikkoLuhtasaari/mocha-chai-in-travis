import chai from "chai";
import filter from "../src/filter.js";
const expect = chai.expect;

describe("Filter", () => {
  var users;
  before(function () {
    users = [
      { user: "barney", active: true },
      { user: "fred", active: false }
    ];
  });
  it("correctly filters shallow objects", () => {
    expect(filter(users, value => value.active)).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });
  it("returns an empty array when given such as a parameter", () => {
    expect(filter([], value => value.active)).to.deep.equal([]);
  });
});
