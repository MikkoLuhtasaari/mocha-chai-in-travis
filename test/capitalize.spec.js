import chai from "chai";
import capitalize from "../src/capitalize.js";
const expect = chai.expect;

describe("capitalize", () => {
  it("handles all lowercase correctly", () => {
    expect(capitalize("example")).to.equal("Example");
  });
  it("handles all uppercase correctly", () => {
    expect(capitalize("EXAMPLE")).to.equal("Example");
  });
  it("handles uppercase in the middle correctly", () => {
    expect(capitalize("exaMple")).to.equal("Example");
  });
  it("does not modify already capitalized string", () => {
    expect(capitalize("Example")).to.equal("Example");
  });
});