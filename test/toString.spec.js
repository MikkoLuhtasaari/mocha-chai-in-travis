import chai from "chai";
import toString from "../src/toString.js";
const expect = chai.expect;

describe("toString", () => {
  it("converts a number to string", () => {
    expect(toString(2)).to.equal("2");
  });
  it("returns the original value if it was already a string", () => {
    expect(toString("2")).to.equal("2");
  });
  it("returns empty string when parameter is null", () => {
    expect(toString()).to.equal("");
  });
  it("converts an array of strings to a single string", () => {
    expect(toString(["f", "o", "o"])).to.equal("f,o,o");
  });
  it("converts an array of numbers to a single string", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });
});