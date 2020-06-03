import chai from "chai";
import isBoolean from "../src/isBoolean.js";
const expect = chai.expect;

describe("IsBoolean", () => {
  it("returns true when passing in false", () => {
    expect(isBoolean(false)).to.be.true;
  });
  it("returns false when passing in a string", () => {
    expect(isBoolean("true")).to.be.false;
  });
  it("returns false when passing in an object which contains boolean value", () => {
    expect(isBoolean({test: true})).to.be.false;
  });
});