import chai from "chai";
import ceil from "../src/ceil.js";
const expect = chai.expect;

describe("Ceil", () => {
  it("rounds up to the nearest integer", () => {
    expect(ceil(4.006)).to.equal(5);
  });
});