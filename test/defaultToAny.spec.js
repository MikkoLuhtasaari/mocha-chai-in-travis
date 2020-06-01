import chai from "chai";
import defaultToAny from "../src/defaultToAny.js";
const expect = chai.expect;

describe("DefaultToAny", () => {
  it("returns default value on undefined", () => {
    expect(defaultToAny(undefined, 10)).to.equal(10);
  });
  it("returns default value on multiple undefined", () => {
    expect(defaultToAny(undefined, undefined, 10)).to.equal(10);
  });
  it("does not return default value when it is not needed", () => {
    expect(defaultToAny(1, 10)).to.equal(1);
  });
});