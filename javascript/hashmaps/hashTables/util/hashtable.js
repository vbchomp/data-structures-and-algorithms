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
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  // hash method
  hash(key) {
    // find every ASCII value for each value in string
    // add up all the ASCII values
    // multiply by prime number
    // modulo the size of the hashmap
    // returns index in collection for the key
    return key.split('').reduce((prev, curr) => {
      return prev + curr.charCodeAt(0);
    }, 0) * 331 % this.size;
  }

  // set method
  set(key, value) {
    const hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let hashEntry = { [key]: value };
    this.map[hash].append(hashEntry);
  }

  // get method
  get(key) {
    // hash the key
    let hash = this.hash(key);
    // if there is nothing at the hash, return
    if (!this.map[hash]) return;
    // hash index.values
    let value = this.map[hash].values().find(el => key === Object.keys(el)[0]);
    return value[key];
  }

  // contains method
  contains(key) {
    if (key) return true;
  }


}

let myHashTable = new HashTable(1024);
myHashTable.set('Eggplant', '10');
myHashTable.set('SnowPeas', '20');
myHashTable.set('BellPepper', '25');
myHashTable.set('Tofu', '15');
myHashTable.set('BlackBeans', '17');
myHashTable.set('ChiliSauce', '13');
myHashTable.set('Broccoli', '31');

let peas = myHashTable.get('SnowPeas');
let key = 'noPlaceLikeHome';
console.log('get method', peas);

console.log((key.charCodeAt(0) + key.charCodeAt(1) + key.charCodeAt(2) + key.charCodeAt(3)) * 331 & 1024);

module.exports = HashTable;
