'use strict';

// const Node = require('../lib/node.js');
// Require our linked list implementation
const LinkedList = require('../linked-list/lib/ll.js');
console.log('Linked:', LinkedList);

describe('Linked List', () => {
  it('instantiate a new linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });


  it('insert at the head', () => {
    let list = new LinkedList();
    list.insertAtHead('anyString');
    list.insertAtHead('anotherString');
    expect(list.head.value).toEqual('anotherString');
    expect(list.head.next.value).toEqual('anyString');
  });

  it('append at the end of the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
  });

  it('makes a string of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(4);
    expect(list.includes(4));
    expect(list.includes(5));
  });

  it('makes a string of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(3);
    expect(list.toString()).toEqual('{ 1 } -> { 3 } -> { 3 } -> NULL');

  });

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

  // zip tests
  it('it adds the element to the beginning of the list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });

});
