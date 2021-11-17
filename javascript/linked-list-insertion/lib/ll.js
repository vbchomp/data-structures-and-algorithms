'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // linked lists append to the end of the list by adding a new node at end
  append(value) {
    let node = new Node(value);

    // what if the list has no nodes?
    if (!this.head) {
      // console.log('here:' );
      this.head = node;
      this.size++;
      return this;
    }

    // If there are nodes
    let currentNode = this.head;
    // console.log('currentNode:', currentNode);
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    // console.log('currentNode:', currentNode);

    currentNode.next = node;
    this.size++;
    return this;
  }

  // insert before
  insertBefore(value, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    const node = new Node(value);
    let current;
    let previous;

    // Set current to first node
    current = this.head;
    let count = 0;
    console.log('here', index);

    if (index === 0 && this.head) {
      this.head = node;
      this.head.next = current;
      this.size++;
      return;
    }
    console.log('here');

    while (count < index) {
      previous = current; // node before index
      count++; // incrementing count
      current = current.next; // node after index
    }
    console.log('current:', current);

    node.next = current; // saving the next node as current
    previous.next = node;

    this.size++;
  }

  // insert after
  insertAfter(value, index) {
  // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    const node = new Node(value);
    let current;
    let previous;

    // Set current to first node
    current = this.head;
    let count = 0;

    while (count <= index) {
      previous = current; // node before index
      count++; // incrementing count
      current = current.next; // node after index
    }

    node.next = current; // saving the next node as current
    previous.next = node;

    this.size++;
  }

}


const ll = new LinkedList();

ll.append(100);
ll.append(200);
// console.log('linkedlist.head:', ll.head);


module.exports = LinkedList;
