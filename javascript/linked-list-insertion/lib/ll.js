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

  // Inserting node at the head.
  insertAtHead(data) {
    const tempHead = this.head;
    const node = new Node(data);
    this.head = node;
    this.head.next = tempHead;
  }

  // linked lists append to the end of the list by adding a new node at end
  // append(value) {
  //   let node = new Node(value);
  //   // what if the list has no nodes?
  //   if (!this.head) {
  //     this.head = node;
  //     return this;
  //   }
  //   // If there are nodes
  //   let currentNode = this.head;
  //   while (currentNode) {
  //     currentNode = currentNode.next;
  //   }
  //   currentNode.next = node;
  //   return this;
  // }

  // linked list includes method adds a node to the head list
  includes(value) {
    let currentNode = this.head;
    // instead of using currentNode.next to force while loop to stay in loop for the last node, use the current Node, so it will use the last node in the loop and catch with the boolean.
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let nodeString = '';
    while (currentNode.next) {
      console.log('currentNode.value:', currentNode.value);
      nodeString === ''
        ? (nodeString = `{ ${currentNode.value} }`)
        : (nodeString = `${nodeString} -> { ${currentNode.value} }`);
      currentNode = currentNode.next;
    }
    // because the while did not act on the last node it did not utilize the terniary.
    nodeString === ''
      ? (nodeString = `{ ${currentNode.value} }`)
      : (nodeString = `${nodeString} -> { ${currentNode.value} }`);
    nodeString = `${nodeString} -> NULL`;
    return nodeString;
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

ll.append(100);
ll.append(200);
// console.log('linkedlist.head:', ll.head);

module.exports = LinkedList;

// Possible deductions: // 0.5 pt: Inefficient solution // 0.5 pt: Missing comments/doc-strings // 1 pt: ~50% incomplete // 1 pt : Missing test requirements
