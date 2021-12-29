function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = n / 2;
    let left = arr[(0, mid)];
    let right = arr[(mid, right.length)];
  }
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
}

function merge(left, right, arr) {
  let i, j, k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if ((i = left.length)) {
    arr[k] = left[i];
    i++;
  } else {
    arr[k] = right[j];
    j++;
    k++;
  }
  return arr;
}

module.exports = mergeSort;
