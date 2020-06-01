import chai from "chai";
import eq from "../src/eq.js";
const expect = chai.expect;

describe("Eq", () => {
  it("returns true when strings match", () => {
    expect(eq("abc", "abc")).to.be.true;
  });
  it("returns false when types do not match", () => {
    expect(eq("1", 1)).to.be.false;
  });
});