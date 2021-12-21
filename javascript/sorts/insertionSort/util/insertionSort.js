'use strict';

class Sorts {
  constructor() {

  }

  insertionSort(arr) {
    let i, j, temp;
    for (i = 1; i < arr.length; i++) {
      if (arr.length === 0) {
        console.log('Array is empty!');
      }

      j = i - 1;
      temp = arr[i]; // this selects the first unsorted element

      while (j >= 0 && arr[j] > temp) {
        // loop shifts elements to the right to create position for the unsorted element
        arr[j + 1] = arr[j];
        j = j - 1; // inserts the unsorted element to it's correct position
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
}

const sorts = new Sorts();

sorts.insertionSort();

module.exports = Sorts;
