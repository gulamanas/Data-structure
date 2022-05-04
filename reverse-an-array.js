function reverseAnArray() {
  let arr = [2, 4, 1, 5, 10, 3, 6];
  //   let arr = [1, 2, 3];
  let n = arr.length - 1;

  for (let i = 0; i <= n / 2; i++) {
    let temp = arr[i];
    console.log("temp", temp);
    arr[i] = arr[n - i];
    console.log("arr[i]", arr[i]);
    arr[n - i] = temp;
    console.log("arr[n - i]", arr[n - i]);
    console.log("arr", arr);
  }

  // without any method
  console.log(arr);

  //   with method
  //   console.log([...arr].reverse());
}
reverseAnArray();
