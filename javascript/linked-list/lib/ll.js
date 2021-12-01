'use strict';

const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserting node at the head.
  insertAtHead(data) {
    const tempHead = this.head;
    const node = new Node(data);
    this.head = node;
    this.head.next = tempHead;
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
    let nodeString = "";
    while (currentNode.next) {
      console.log("currentNode.value:", currentNode.value);
      nodeString === ""
        ? (nodeString = `{ ${currentNode.value} }`)
        : (nodeString = `${nodeString} -> { ${currentNode.value} }`);
      currentNode = currentNode.next;
    }
    // because the while did not act on the last node it did not utilize the terniary.
    nodeString === ""
      ? (nodeString = `{ ${currentNode.value} }`)
      : (nodeString = `${nodeString} -> { ${currentNode.value} }`);
    nodeString = `${nodeString} -> NULL`;
    return nodeString;
  }

  zipList(secondList) {
    let firstCurr, firstPrev = this.head;
    let secondCurr, secondPrev = secondList.head;
    // check is head exists
    if (this.head.next) {
      firstCurr = this.head.next;
    }
    if (secondList.head.next) {
      secondCurr = secondList.head.next;
    }

    //assigning down to second list then up and left to first list
    while (firstPrev && secondPrev) {
      console.log('prevs', firstPrev, secondPrev);
      firstPrev.next = secondPrev;
      secondPrev.next = firstCurr;
      firstPrev = firstCurr;
      secondPrev = secondCurr;

      // if the lists are same length
      if (firstCurr) {
        firstCurr = firstCurr.next;
      }
      if (secondCurr) {
        secondCurr = secondCurr.next;
      }
    }

    return this.head;
  }



}

const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    const ll2 = new LinkedList();
    ll2.append('a');
    ll2.append('b');
    ll2.append('c');

    let results = ll.zipList(ll2);
console.log('results', results);

// const ll = new LinkedList();

// ll.append(100);
// ll.append(200);
// ll.append(300);
// ll.append(400);
// ll.append(500);
// ll.append(600);
// console.log('linkedlist.head:', ll.head);

// const reverse = (linkedlist) => {
//   let prev = linkedlist.head;
//   let current = linkedlist.head.next;
//   let forward = linkedlist.head.next.next;

//   current.next = prev;

//   while (forward) {
//     prev = current;
//     current = forward;
//     forward = forward.next;
//     current.next = prev;
//   }
//   linkedlist.head = current;
//   console.log('current',current);
//   console.log('this.head', linkedlist.head);
//   return linkedlist;
// };
// console.log('reverse', reverse(ll).head);

module.exports = LinkedList;
