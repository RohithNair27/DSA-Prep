// o(n**2)
function bubbleSort(arr) {
  let noSwap = true;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false; // If all the elements are already sorted
      }
    }
    if (noSwap) break; // Improves performace
  }
  return arr;
}

console.log(bubbleSort([1, 2, -10, 10, 100, -99, 99, 200, -200]));
console.log(bubbleSort([1, 2, 3, 200]));
