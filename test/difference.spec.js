import chai from "chai";
import difference from "../src/difference.js";
const expect = chai.expect;

describe("Difference", () => {
  it("returns the difference", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });
  it("returns empty array when there is no difference", () => {
    expect(difference([2, 1], [2, 1])).to.deep.equal([]);
  });
  it("returns empty array when iterating is not possible", () => {
    expect(difference(2, 1)).to.deep.equal([]);
  });
});