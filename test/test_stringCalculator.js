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
    expect(stringCalculator("1,2,5")).to.equal("8");
  });
});
describe("Step 2", function () {
  it("should return 6 when the input is '1\n,2,3'", () => {
    expect(stringCalculator("1\n,2,3")).to.equal("6");
  });
  it("should return 7 when the input is '1,\n2,4'", () => {
    expect(stringCalculator("1,\n2,4")).to.equal("7");
  });
});
describe("Step 3", function () {
    it("should return 8 when the input is '“//;\n1;3;4”'", () => {
      expect(stringCalculator("//;\n1;3;4")).to.equal("8");
    });

});
describe("Step 4", function () {
  it("input of '-1,2,5' should result in Negatives not allowed", () => {
    expect(stringCalculator("-1,2,5")).to.equal("Negatives not allowed, -1, ");
  });
  it("input of '-1,-2,5' should result in Negatives not allowed", () => {
    expect(stringCalculator("-1,-2,5")).to.equal("Negatives not allowed, -1, -2, ");
  });
});