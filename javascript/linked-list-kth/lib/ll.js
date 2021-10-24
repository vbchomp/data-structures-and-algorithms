'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert at an index
  getByIndex(index) {
    if(index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

const ll = new LinkedList();

ll.getByIndex(1);
ll.getByIndex(2);
ll.getByIndex(3);

module.exports = LinkedList;
