function calculateSum(numbers) {
let sum = 0;
for (const number of numbers) {
  sum += number;
}
return sum;
}

function findHighestLowest(numbers) {
  
}

function calculateAverage(numbers) {
  
}
console.log(calculateSum([1, 2, 3]));      // 6
console.log(calculateSum([10, -5, 2]));    // 7
console.log(calculateSum([]));             // 0
console.log(calculateSum([4.5, 1.5]));     // 6



module.exports = {
  calculateSum,
  findHighestLowest,
  calculateAverage,
};