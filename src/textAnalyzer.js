function countWords(text) {
  if (!text || text.trim() === "") return 0;
  else return text.trim().split(/\s+/).length;
}


console.log("Words: " + countWords("the quick brown fox"));
console.log("Words: " + countWords("hello"));
console.log("Words: " + countWords(""));
console.log("Words: " + countWords("the  quick"));
console.log("Words: " + countWords("  "));
console.log("Words: " + countWords("one\ntwo"));