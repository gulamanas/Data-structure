// Find a digit at a specific place in a number

// <debug>
C = console.info.bind(console);
// </debug>

function digitAtSpecificNumber(num) {
  n = num.toString();
  return n.charAt(2);
}
result = digitAtSpecificNumber(123456);
C(result);
