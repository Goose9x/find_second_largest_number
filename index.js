// let arr = [1,2,5,6,4,10,10,5,9,9];
let arr = [-1, -2, -4, -3, -3];

let max1 = Number.NEGATIVE_INFINITY,
  max2 = max1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max1) {
    max2 = max1;
    max1 = arr[i];
  } else if (arr[i] < max1 && arr[i] > max2) {
    max2 = arr[i];
  }
}
console.log(max1, max2);
