'use strict';

// Create a node class
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

module.exports = Node;
