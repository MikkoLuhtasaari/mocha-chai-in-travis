import chai from "chai";
import compact from "../src/compact.js";
const expect = chai.expect;

describe("Compact", () => {
  it("removes zeros from the array", () => {
    expect(compact([0, 1, 2, 3])).to.deep.equal([1, 2, 3]);
  });
  it("removes nullls from the array", () => {
    expect(compact([null, 1, 2, 3])).to.deep.equal([1, 2, 3]);
  });
  it("removes undefined from the array", () => {
    expect(compact([undefined, 1, 2, 3])).to.deep.equal([1, 2, 3]);
  });
  it("returns an empty array when null is given as a parameter", () => {
    expect(compact(null)).to.deep.equal([]);
  });
});