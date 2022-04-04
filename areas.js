// area of triangle

function triangleArea(b, h) {
  let area = 0.5 * b * h;
  return `${area} sq unit`;
}
console.log(triangleArea(4, 3));

// area of rectagle
function rectagleArea(l, h) {
  let area = l * h;
  return `${area} sq unit`;
}
console.log(rectagleArea(4, 5));

// area of circle

function circleArea(r) {
  let pi = 3.14;
  let area = pi * r * r;
  return `${area} sq unit`;
}
console.log(circleArea(4));
