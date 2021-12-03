# Linked List Zip

## Challenge Summary

Zip two linked lists. Use linked-list-zip branch.

## Approach & Efficiency

Watched a youtube video that explained how to do linked lists and TDD.  

[How To Implement Linked Lists With Test Driven Development in JavaScript](https://www.youtube.com/watch?v=gJjPWA8wpQg)

## Solution

Created zipList function that accepts the second linked list as an argument. Created current and previous variables and assigned to the head for each of the first and second lists.

Checked if the head exits with an if statement before starting the while loop. While the first and second previous variables exist, the prev.next from first list is assigned to the prev from second list. Then the prev.next is assigned to the current from the first list.

Then the firstPrev is assigned as firstCurr and secondPrev is assigned to secondCurr.

In order to finish the while loop if the lists are the same length or the first list is longer, the next two if statements verify that there is a current in each list to run and get that last current in the second list to zip into the list.

Then return the head.

I was not able to figure out how to check for a longer second list.

## Link

[Link](https://github.com/vbchomp/data-structures-and-algorithms/tree/main/javascript/linked-list/README-list-zip.md)
