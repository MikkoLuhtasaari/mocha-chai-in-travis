import chai from "chai";
import slice from "../src/slice.js";
const expect = chai.expect;

describe("Slice", () => {
  it("correctly slices a numbers array", () => {
    expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
  });
  it("correctly slices an array of strings", () => {
    expect(slice(["a", "b", "c", "d"], 3)).to.deep.equal(["d"]);
  });
  it("returns a copy of original array when not given start", () => {
    expect(slice(["a", "b", "c", "d"])).to.deep.equal(["a", "b", "c", "d"]);
  });
  it("returns an empty array when given an empty array", () => {
    expect(slice([])).to.deep.equal([]);
  });
  it("correctly slices an array when negative start is given", () => {
    expect(slice([1, 2, 3, 4], -1)).to.deep.equal([4]);
  });
  it("correctly slices an array when negative end is given", () => {
    expect(slice([1, 2, 3, 4], 0, -1)).to.deep.equal([1, 2, 3]);
  });
});