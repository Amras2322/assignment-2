const {
  calculateSum,
  findHighestLowest,
  calculateAverage,
} = require("../src/numberProcessor");

describe("numberProcessor", () => {
  test("calculates the sum of all numbers", () => {
    expect(calculateSum([1, 2, 3, 4])).toBe(10);
  });

  test("finds the highest and lowest numbers", () => {
    expect(findHighestLowest([85, 92, 78])).toEqual({
      highest: 92,
      lowest: 78,
    });
  });

  test("calculates the average", () => {
    expect(calculateAverage([1, 2, 3, 4])).toBe(2.5);
  });
});
