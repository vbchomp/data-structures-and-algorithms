max() {
  // check if root exists
  // return false if no
  // what if the first node is 0?

  let max = this.root.value; // tmp integer variable

  let _max = node => {
    // let max = current.val if larger
    // if smaller, goleft -> go right

  }
  return max;
  // iterate recursively through your tree
  // update a max var if current.val >
  // call _max(curr.left)

  // call traversal on tree, iterate through the array and grab largest
  // could be more space efficient

  let results = bt.preOrder;
  // for loop through array updating max as you go

}



Implementation: Trees
Specifications
Read all of these instructions carefully.
Name things exactly as described.
Do all your work in a your data-structures-and-algorithms public repository.
Create a new branch in your repo named as noted below.
Follow the language-specific instructions for the challenge type listed below.
Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.
Challenge Setup & Execution
Branch Name: trees

Challenge Type: New Implementation

Features
Node
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Binary Tree
Create a Binary Tree class
Define a method for each of the depth first traversals:
pre order
in order
post order which returns an array of the values, ordered appropriately.
Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
Binary Search Tree
Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
Contains
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.
Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
Can successfully add a left child and right child to a single root node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal
Ensure your tests are passing before you submit your solution.

Stretch Goal
Create a new branch called k-ary-tree, and, using the resources available to you online, implement a k-ary tree, where each node can have any number of children.

Documentation: Your README.md
# Trees
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your trees -->
Submission Instructions
Create a pull request from your branch to your main branch
In your open pull request, leave as a comment a checklist of the specifications and tasks above, with the actual steps that you completed checked off
Submitting your completed work to Canvas:
Copy the link to your open pull request and paste it into the corresponding Canvas assignment
Leave a description of how long this assignment took you in the comments box
Add any additional comments you like about your process or any difficulties you may have had with the assignment
Merge your branch into main, and delete your branch (don’t worry, the PR link will still work)

## Tree-breadth-first search

- bfs() {
  // if no root node, return
  if (!this.root) return;
  //create input and output queues/arrays
  let queue = [this.root];
  let output = [];
  // while length = true
  while (queue.length) {
    // let's examine the first node
    let node = queue.shift();
    console.log('node', node);
    // if there's a left child, push that to queue for later consumption
    if (node.left) {
      queue.push(node.left);
    }
    // if there is right child , push to that to queue for later consumption
    if (node.right) {
      queue.push(node.right);
    }
    //else/otherwise push value to output
    output.push(node.value);
  }
  return output;
}


## Fizz-buzz

- K-ary tree has same number of children on each branch.
  Can be a binary tree, but not all binary trees are k-ary trees because they have uneven amounts of children.

- 