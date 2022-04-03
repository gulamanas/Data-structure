function evenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i); // print all the value till n
      //   return i;  // for single value
    }
  }
}
// console.log(evenNumbers(10));
evenNumbers(10);
