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
  console.log(x);
}
sumOfNumbers(10);

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo(10));
