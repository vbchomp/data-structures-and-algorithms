'use strict';

//const Node = require('../lib/node.js');
// Require our linked list implementation
const LinkedList = require('../lib/ll.js');
console.log('Linked;', LinkedList);

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });

describe('Linked List', () => {

  it('instantiate a new linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();

  });
    
  
  // it(' to the head', () => {
  //   let list.append('anyString');
  //   expect(list.head.value).toEqual('anyString');
  // });
    
  // it('', () => {
  //   let list.append(1);
  //   expect(list.head.next.value).toEqual(1);
  // });
  

});
