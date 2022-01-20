'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
      this.size++;
      return this;
    }
    // If there are nodes
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.size++;
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
}

class HashTable {
  constructor() {
    this.size = 0;
    this.map = new Array(1024);
  }

  // hash method
  hash(key) {
    // find every ASCII value for each value in string
    // add up all the ASCII values
    // multiply by prime number
    // modulo the size of the hashmap
    // returns index in collection for the key
    // return key.split('').reduce((prev, curr) => {
    //   return prev + curr.charCodeAt(0);
    // }, 0) * 331 % this.size;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.map.length;
  }

  // set method
  // from freecodecamp.org
  set(key, value) {
    const index = this.hash(key);
    this.map[index] = [key, value];
    this.size++;
  }

  // get method
  //from freecodecamp.org
  get(key) {
    const index = this.hash(key);
    return this.map[index];

  }

  // remove method
  // from freecodecamp.org
  remove(key) {
    const index = this.hash(key);

    if (this.map[index] && this.map[index].length) {
      this.map[index] = undefined;
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  // contains method
  contains(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      return true;
    } else {
      return false;
    }
  }
}

let myHashTable = new HashTable(1024);

// let key = 'noPlaceLikeHome';

// myHashTable.display();

myHashTable.set('Eggplant', '10');
myHashTable.set('SnowPeas', '20');
myHashTable.set('BellPepper', '25');
myHashTable.set('Tofu', '15');
myHashTable.set('BlackBeans', '17');
myHashTable.set('ChiliSauce', '13');
myHashTable.set('Broccoli', '31');

console.log(myHashTable.get('Eggplant'));
console.log(myHashTable.get('SnowPeas'));
console.log(myHashTable.get('BellPepper'));

console.log(myHashTable);

// console.log((key.charCodeAt(0) + key.charCodeAt(1) + key.charCodeAt(2) + key.charCodeAt(3)) * 331 & 1024);

module.exports = HashTable;
