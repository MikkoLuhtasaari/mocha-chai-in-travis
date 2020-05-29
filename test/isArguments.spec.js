import chai from "chai";
import isArguments from "../src/isArguments.js";
const expect = chai.expect;

describe("isArguments", () => {
  it("returns true when arguments is present", () => {
    expect(isArguments(function() { return arguments }())).to.be.true;
  });
  it("returns false when arguments is not present", () => {
    expect(isArguments([1, 2, 3])).to.be.false;
  });
});