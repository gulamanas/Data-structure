function reverseAnArray() {
  let arr = [2, 4, 1, 5, 10, 3, 6];
  let n = arr.length - 1;

  for (let i = 0; i <= n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
  }

  console.log(arr);
}
reverseAnArray();
