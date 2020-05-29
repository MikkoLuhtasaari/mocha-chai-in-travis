import chai from "chai";
import memoize from "../src/memoize.js";
const expect = chai.expect;

describe("Memoize", () => {
  it("throws an error when parameter is not a function", () => {
    expect(memoize).to.throw(TypeError, "Expected a function");
  });
});