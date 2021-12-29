# Merge Sort

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

## Whiteboard Process

![CC27_mergeSort](/javascript/sorts/insertionSort/CC27_mergeSort_whiteboard.png)

## Approach & Efficiency

![Blog](javascript/sorts/mergeSort/blog.md)

## Resources

[Merge Sort](https://www.geeksforgeeks.org/merge-sort/)

## Solution

Iterated through the array in 13 steps. The first few steps divide the array into smaller sections until there is only 1 number object left. Then the value is compared against the values in the left side index to sort the values from smallest to largest and merge into a temporary array.

The right side would then continue to divide down into single units and compare against the values on the right side. They would then get merged into a temp array.

The final step is when the two temp arrays are merged and sorted lowest to highest.
