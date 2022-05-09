// Smallest element in a given number of arrays
C = console.info.bind(console);

function smallestElement() {
  var arr = [23, 544, 10, 234, 53, 342];

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    return arr;
  }
}
console.log(smallestElement());
