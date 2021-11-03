'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
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
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    return this;

  }

  // linked list includes method adds a node to the head list
}



module.exports = LinkedList;
