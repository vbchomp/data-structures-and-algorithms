'use strict';

// Import node class
const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  // Add new node to stack
  push(value) {
    // New node
    let node = new Node(value);
    if(!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  // Remove node from stack
  pop() {
    if(!this.top) {
      throw new Error('Stack is empty!!');
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp;
    }
  }

  // Take a look at next node in stack
  peek() {
    let current = this.top;
    if (!current) {
      return 'Stack is empty!';
    } else {
      return current.value;
    }
  }

  // Check if stack is empty
  isEmpty() {
    if (!this.top) {
      return false;
    }
  }

}

module.exports = Stack;
