import chai from "chai";
import castArray from "../src/castArray.js";
const expect = chai.expect;

describe("CastArray", () => {
  it("returns empty array with no parameters", () => {
    expect(castArray()).to.deep.equal([]);
  });
  it("converts string to an array", () => {
    expect(castArray("foo")).to.deep.equal(["foo"]);
  });
  it("does not modify an array", () => {
    expect(castArray(["foo"])).to.deep.equal(["foo"]);
  });
});