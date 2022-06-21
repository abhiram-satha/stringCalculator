const chai = require("chai");
const expect = chai.expect;

const { stringCalculator } = require("../stringCalculator.js");

describe("Step 1", function () {
  it("should return 0 when the input is empty", () => {
    expect(stringCalculator()).to.equal(0);
  });
  it("return type should be an integer", () => {
    expect(typeof stringCalculator()).to.equal("number");
  });
  it("input of '1,2,5' should result in 8", () => {
    expect(stringCalculator("1,2,5")).to.equal(8);
  });
});
