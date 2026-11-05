function calculateSum(numbers) {
let sum = 0;
for (const number of numbers) {
  sum += number;
}
return sum;
}

function findHighestLowest(numbers) {
  if (numbers.length === 0) {
    return { highest: null, lowest: null };
  }
  let highest = numbers[0];
  let lowest = numbers[0];
  for (const number of numbers) {
    if (number > highest) highest = number;
    if (number < lowest) lowest = number;
  }
  return { highest, lowest };
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  return calculateSum(numbers) / numbers.length;
}

module.exports = {
  calculateSum,
  findHighestLowest,
  calculateAverage,
};