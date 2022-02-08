'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list-insertion/lib/ll.js');

describe('Linked List', () => {
  it('instantiate a new linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('should append successfully', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(7);
    // console.log('list.head:', list.head);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(7);
  });

  it('should insert before successfully', () => {
    let list = new LinkedList();
    list.append(1);
    list.insertBefore(3, 0);
    list.insertBefore(4, 1);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('should insert after successfully', () => {
    let list = new LinkedList();
    list.append(1);
    list.insertAfter(3, 0);
    list.insertAfter(4, 1);
    console.log('list.head:', list.head.next);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(4);
  });

});



// tree class and instance from https://dev.to/ggenya132/depth-first-traversal-in-javascript-3ehp
class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let tree = new Tree(
  1,
  new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),
  new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))
);