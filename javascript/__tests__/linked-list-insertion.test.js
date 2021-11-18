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
