import chai from "chai";
import endsWith from "../src/endsWith.js";
const expect = chai.expect;

describe("EndsWith", () => {
  it("returns true when string ends with another string", () => {
    expect(endsWith("abc", "c")).to.be.true;
  });
  it("returns false when string does not end with another string", () => {
    expect(endsWith("abc", "b")).to.be.false;
  });
  it("offset works correctly", () => {
    expect(endsWith("abc", "b", 2)).to.be.true;
  });
});