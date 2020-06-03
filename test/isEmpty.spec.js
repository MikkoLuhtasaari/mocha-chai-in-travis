import chai from "chai";
import isEmpty from "../src/isEmpty.js";
const expect = chai.expect;

describe("IsEmpty", () => {
  it("returns true when passing in an integer", () => {
    expect(isEmpty(1)).to.be.true;
  });
  it("returns false when passing in a string", () => {
    expect(isEmpty("Mon April 23 2012")).to.be.false;
  });
});