'use strict';

// Import node class
const Node = require('./node.js');

class PseudoQueue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // Create a new node in line
  enqueue(value) {
    // New node
    let node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = this.front;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  // Take a node out of line
  dequeue() {
    if (!this.front) {
      throw new Error('Queue is empty, hurry up!!');
    }
    else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp;
    }
  }
}

module.exports = PseudoQueue;
