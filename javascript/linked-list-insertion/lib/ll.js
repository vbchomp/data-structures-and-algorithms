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
      this.head = node;
      return this;
    }

    // If there are nodes
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  // insert at an index
  insertAtIndex(value, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if at first index
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }

    const node = new Node(value);
    let current;
    let previous;

    // Set current to first node
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // node before index
      count++; // incrementing count
      current = current.next; // node after index
    }

    node.next = current; // saving the next node as current
    previous.next = node;

    this.size++;
  }

  // Insert

  // get from an index

  // remove at index

  // clear the list

  // print the list value
}


const ll = new LinkedList();

ll.insertAtIndex(100);
ll.insertAtIndex(200);
ll.insertAtIndex(300);

module.exports = LinkedList;
