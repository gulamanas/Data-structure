// Largest Digit

// var number = 123343438;
// function maxNumber(num) {
//     if (num == 0) {
//         return 0;
//     }
//     else {
//         var remainder = n % 10;
//         return Math.max(remainder, maxDigit)
//     }
// }

// function maxDigit(n) {
//   var a = n.toString();
//   var b = a.split("");

//   return Math.max.apply(null, b);
// }
// console.log(maxDigit(238445));

// By using Recursion
function maxDigit(n) {
  if (n == 0) {
    return 0;
  } else {
    var remainder = n % 10;
    return Math.max(remainder, maxDigit((n - remainder) * 1e-1));
  }
}
console.log(maxDigit(16984));
