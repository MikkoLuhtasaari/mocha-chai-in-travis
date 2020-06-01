import chai from "chai";
import defaultTo from "../src/defaultTo.js";
const expect = chai.expect;

describe("DefaultTo", () => {
  it("returns default value on undefined", () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });
  it("does not return default value when it is not needed", () => {
    expect(defaultTo(1, 10)).to.equal(1);
  });
});