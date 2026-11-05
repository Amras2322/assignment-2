function countWords(text) {
  if (!text || text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
}
function findLongestWord(text) {
  if (!text || text.trim() === "") return "";
  return text.trim().split(/\s+/).sort((a, b) => b.length - a.length)[0];
}

console.log("Words: " + countWords("the quick brown fox"));
console.log("Words: " + countWords("hello"));
console.log("Words: " + countWords(""));
console.log("Words: " + countWords("the  quick"));
console.log("Words: " + countWords("  "));
console.log("Words: " + countWords("one\ntwo"));

console.log("Longest: " + findLongestWord("the quick brown fox"));
console.log("Longest: " + findLongestWord("hello"));
console.log("Longest: " + findLongestWord(""));
console.log("Longest: " + findLongestWord("the  quick"));
console.log("Longest: " + findLongestWord("  "));
console.log("Longest: " + findLongestWord("one\ntwo"));
console.log("Longest: " + findLongestWord("ab"));