import chai from "chai";
import every from "../src/every.js";
const expect = chai.expect;

describe("Every", () => {
  it("returns false when not all elements are truthy", () => {
    expect(every([true, 1, null, 'yes'], Boolean)).to.be.false;
  });
  it("returns true for an empty array", () => {
    expect(every([], Boolean)).to.be.true;
  });
});