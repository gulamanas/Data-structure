// to check sum of n numbers

// let n = 10;
// let x = 0;

// for (let i = 0; i <= n; i++) {
//   x = i + x;
// }
// console.log(x);

function sumOfNumbers(n) {
  let x = 0;
  for (let i = 0; i <= n; i++) {
    x = i + x;
  }
  return x;
}
sumOfNumbers(10);

var t1 = performance.now();
sumOfNumbers(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
// console.log(addUpTo(10));
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
