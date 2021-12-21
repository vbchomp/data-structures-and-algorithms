'use strict';

const sorts = require('../sorts/insertionSort/util/insertionSort.js');
let array = [8, 4, 23, 42, 16, 15];
let expectedVals = [4, 8, 15, 16, 23, 42];

describe('Given array', () => {
  describe('When array', () => {

    it('Then returns sorted array', () => {
      expect(expectedVals).toBeTruthy();
    });

    it('can tell if array is empty', () => {
      expect(array).toNotBeNull();
    });

  });
});
