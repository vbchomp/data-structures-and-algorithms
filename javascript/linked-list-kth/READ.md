Code Challenge
k-th value from the end of a linked list.

Specifications
Read all of these instructions carefully.
Name things exactly as described.
Do all your work in a your data-structures-and-algorithms public repository.
Create a new branch in your repo named as noted below.
Follow the language-specific instructions for the challenge type listed below.
Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.
Challenge Setup & Execution
Branch Name: linked-list-kth

Challenge Type: Extending an Implementation

Feature Tasks
Write the following method for the Linked List class:

kth from end
argument: a number, k, as a parameter.
Return the node’s value that is k places from the tail of the linked list.
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
Example
ll.kthFromEnd(k)
Input ll	Arg k	Output
head -> [1] -> [3] -> [8] -> [2] -> X	0	2
head -> [1] -> [3] -> [8] -> [2] -> X	2	3
head -> [1] -> [3] -> [8] -> [2] -> X	6	Exception
Unit Tests
Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.

Where k is greater than the length of the linked list
Where k and the length of the list are the same
Where k is not a positive integer
Where the linked list is of a size 1
“Happy Path” where k is not at the end, but somewhere in the middle of the linked list
Unit tests must be passing before you submit your final solution code.

Stretch Goal
Once you’ve achieved a working solution, implement a method that finds the node at the middle of the Linked List.

Requirements
Ensure your complete solution follows the standard requirements.

Write unit tests
Follow the template for a well-formatted README
Submit the assignment following these instructions