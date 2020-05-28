import chai from "chai";
import camelCase from "../src/camelCase.js";
const expect = chai.expect;

describe("camelCase", () => {
  it("correctly combines strings", () => {
    expect(camelCase("camel case")).to.equal("camelCase");
  });
  it("ignores special character -", () => {
    expect(camelCase("--camel-case")).to.equal("camelCase");
  });
  it("ignores special character _", () => {
    expect(camelCase("__camel_case__")).to.equal("camelCase");
  });
});