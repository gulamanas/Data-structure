// Check if a number is a perfect square or not

// using Math inbuilt function of JavaScript

// function squareRoot(num) {
//   return Math.sqrt(num);
// }
// console.log(squareRoot(25));

function squareRoot(num) {
  for (i = 1; i < num; i++) {
    if (i * i == num) {
      return i;
    }
  }
  return "the given number is not a perfect square root";
}
console.log(squareRoot(26));
