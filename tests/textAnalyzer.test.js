const {
  countWords,
  findLongestWord,
  countLines,
} = require("../src/textAnalyzer");

describe("textAnalyzer", () => {
  test("counts the total number of words", () => {
    expect(countWords("the quick brown fox")).toBe(4);
  });

  test("finds the longest word", () => {
    expect(findLongestWord("the quick brown fox")).toBe("quick");
  });

  test("counts how many lines the file has", () => {
    expect(countLines("one\ntwo\nthree")).toBe(3);
  });
});
