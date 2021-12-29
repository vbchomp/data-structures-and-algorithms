# Mystically Magical Merge Sorts

## Code Challenge 27, by Heather Bisgaard

This article is all about the wonders of the Merge Sort Code Challenege. In this challenge, we were given a sample array of numbers, pseudo code, and told to show the solution steps in a visual representation, write the code, write passing tests and write a blog article (see headline above).

Check out my visual ![here](/javascript/sorts/insertionSort/CC27_mergeSort_whiteboard.png) of the tracing for this challenege. It shows the numbered steps and what their function was. The sample array was ```[8, 4, 23, 42, 16, 15]```.

The first steps divided the array down to the smallest units. It did this by dividing the array by 2 (a left and right side). If there was more than one unit leftover after the division, it would divide by 2 again, until there was only singular units left. 

So after the first step, the sample array was divided up with ```[8, 4] [23]``` on the left side and ```[42, 16] [15]``` on the right. The next step divided down again. ```[8][4][23]``` on the left and ```[42][16][15]``` on the right. This was the last division step as all the values were down to singular units.

Then on the left side, the values were compared against each other to determine their sort position. The values were merged into a temporary array, smallest to largest. The left side temporary array became ```[4, 8, 23]``` and the right side became ```[15, 16, 42]```.

The last step was to merge the left and right sides back into the initial array and sort the value smallest to largest. Final sorted array = ```[4, 8, 15, 16, 23, 42]```.

Thanks to [geeksforgeeks.com](https://www.geeksforgeeks.org/merge-sort/) for their article on how to do a Merge Sort. 