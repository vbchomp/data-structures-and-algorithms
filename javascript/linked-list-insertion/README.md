# Linked List Insertions

## Challenge Summary

Create a Node class with properties for the value stored in the Node and pointer for the next Node. Create a Linked List class with an append, insert before and insert after methods. Use branch name linked-list-insertions.

## Whiteboard Process

![linked-list-insertion whiteboard](./linked-list-insertion.png)

## Approach & Efficiency

Watched a youtube video that explained how to insert at an index. I figured this would work for the before and after.  

Used the Binary Search Algorithm to find the middle index each time. If the middle is not the number, the algorithm moves to the right or left and uses the new start and end values to find the new middle value. It iterates through this until it find the value. If the value is not in array it returns -1.

## Solution

Honestly, I am not sure how to run the code. I could not figure out how to get it to run, so I hope it does a little. 

What it was suppopsed to do was created a Node class, then created a Linked List class. 

In the Node class, the next value is null so that when the last node is created, there is no pointer to data pointing to another node.

In the Linked Lists, it requires the node. Then creates the class with a null header and size of 0. The header is null so that there is no 'first' node. And the size is 0 to initilialize the index.

In the append method, a new node is created. If there are no nodes, then the new node contains the head data for the list. If there are nodes, the current node has the head. 

While the current node contains the next pointer, current node becomes the next node. Then the current next node is saved as node. I did not quite finish this one.

The insertAtIndex method takes in two parameters the node value and the index. If the node value is out of range or the index is 0, create a new node. Start the counter and save the head. Save the previous node before the index, increment the count, then save the node after the index. Then save the next node as the current node. Then increment the size of the list.

I figured this could count for both the before and after, unless you did large numbers. 

## Link

[Link](https://github.com/vbchomp/data-structures-and-algorithms/tree/main/javascript/linked-list-insertion)
