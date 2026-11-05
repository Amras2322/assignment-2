function countWords(text) {
  if (!text || text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
}
function findLongestWord(text) {
  if (!text || text.trim() === "") return "";
  return text.trim().split(/\s+/).sort((a, b) => b.length - a.length)[0];
}

function countLines(text) {
  if (!text) return 0;
  return text.replace(/\n$/, "").split(/\n/).length;
}