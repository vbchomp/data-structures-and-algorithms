Code Challenge
Zip two linked lists.

Specifications
Read all of these instructions carefully.
Name things exactly as described.
Do all your work in a your data-structures-and-algorithms public repository.
Create a new branch in your repo named as noted below.
Follow the language-specific instructions for the challenge type listed below.
Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.
Challenge Setup & Execution
Branch Name: linked-list-zip

Challenge Type: Code Challenge / Algorithm

Feature Tasks
Write a function called zip lists
Arguments: 2 linked lists
Return: Linked List, zipped as noted below
Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.
Try and keep additional space down to O(1)
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
Example
zipLists(list1, list2)
Arg list1	Arg list2	Output
head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
head -> [1] -> [3] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [4] -> X
head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> X
Unit Tests
On this, and all future challenges, write tests for any cases that help you ensure your code is working as expected. Think through different edge cases to determine what tests will ensure your code is covered.

Stretch Goal
Once you’ve achieved a working solution, implement another function that merges two sorted linked lists into a single sorted linked list.

Requirements
Ensure your complete solution follows the standard requirements.

Write unit tests
Follow the template for a well-formatted README
Submit the assignment following these instructions