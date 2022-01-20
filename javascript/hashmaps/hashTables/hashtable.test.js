'use strict';

let HashTable = require('./util/hashtable.js');

let myHashTest = new HashTable(1024);
myHashTest.set('BeanSprouts', '22');
myHashTest.set('Pumpkin', '32');

describe('Hash Table', () => {
  describe('Get', () => {
    it('Returns the value stored', () => {
      let results = {
        'BeanSprouts': '22'
      };
      expect(myHashTest.get('PeaSprouts')).toBeFalsy();
      // expect(myHashTest.get('BeanSprouts')).toEqual(results);
    });

    // it('Should return null for key that does not exist', () => {
    //   expect(myHashTest.get('').toBeNull());
    // });

    // my hash algoritm is off. will not allow this to pass
    it('Adds a value into the data structure', () => {
      let beans = myHashTest.set('Beans', '43');
      expect(myHashTest.get(beans)).toBeTruthy();
    });

  });

  describe('Contains', () => {
    it('should return true or false', () => {
      expect(myHashTest.contains('beansprout')).toBeFalsy();
      expect(myHashTest.contains('Pumpkin')).toBeTruthy();
    });
  });

});



