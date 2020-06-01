import chai from "chai";
import divide from "../src/divide.js";
const expect = chai.expect;

describe("Divide", () => {
  it("correctly divides", () => {
    expect(divide(6, 4)).to.equal(1.5);
  });
});