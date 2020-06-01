import chai from "chai";
import clamp from "../src/clamp.js";
const expect = chai.expect;

describe("Clamp", () => {
  it("respects the lower parameter", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });
  it("respects the upper parameter", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });
});