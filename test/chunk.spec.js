import chai from "chai";
import chunk from "../src/chunk.js";
const expect = chai.expect;

describe("Chunk", () => {
  it("splits correctly with size of 1", () => {
    expect(chunk([0, 1, 2], 1)).to.deep.equal([[0], [1], [2]]);
  });
  it("splits correctly with size of 2", () => {
    expect(chunk([0, 1, 2, 3], 2)).to.deep.equal([[0, 1], [2, 3]]);
  });
  it("final chunk contains the rest of the elements", () => {
    expect(chunk([0, 1, 2, 3], 3)).to.deep.equal([[0, 1, 2], [3]]);
  });
});