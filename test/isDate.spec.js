import chai from "chai";
import isDate from "../src/isDate.js";
const expect = chai.expect;

describe("IsDate", () => {
  it("returns true when passing in a date", () => {
    expect(isDate(new Date())).to.be.true;
  });
  it("returns false when passing in a string", () => {
    expect(isDate("Mon April 23 2012")).to.be.false;
  });
});