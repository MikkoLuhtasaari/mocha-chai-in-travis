import chai from "chai";
import drop from "../src/drop.js";
const expect = chai.expect;

describe("Drop", () => {
  it("drops correct amount of elements", () => {
    expect(drop([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
  });
  it("drops zero elements", () => {
    expect(drop([1, 2, 3, 4], 0)).to.deep.equal([1, 2, 3, 4]);
  });
  it("drops one element when second parameter is missing", () => {
    expect(drop([1, 2, 3, 4])).to.deep.equal([2, 3, 4]);
  });
  it("returns an empty array when all elements are dropped", () => {
    expect(drop([1, 2, 3, 4], 10)).to.deep.equal([]);
  });
});