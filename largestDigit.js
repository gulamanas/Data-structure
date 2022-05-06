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

function maxDigit(n) {
  var a = n.toString();
  var b = a.split("");

  return Math.max.apply(null, b);
}
console.log(maxDigit(238445));
