"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // val - Left - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  preOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers
    // know that this function is recursive
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  // Left - val - right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  inOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers
    //know that this function is recursive
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  // Left - right - val
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  postOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers
    //know that this function is recursive
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }

  fizzBuzzTree(nAry) {
    if (!this.root) return;
    let Fizz, Buzz, FizzBuzz;
    let kAry = [];
    for (let i = 1; i <= nAry.length; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        return FizzBuzz;
      } else if (i % 3 === 0) {
        return Fizz;
      } else if (i % 5 === 0) {
        return Buzz;
      } else if (!i % 3 ===0 || !i % 5 ===0) {
        // how do I turn it into a string?
        // return 'i';
      }

      }

    }
    
  }
}

module.exports = BinaryTree;
