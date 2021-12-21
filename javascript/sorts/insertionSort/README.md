# Insertion Sort

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

## Whiteboard Process

![CC26_insertSort](/javascript/sorts/insertionSort/CC26_insertionSort_whiteboard.png)

## Approach & Efficiency

![Blog](javascript/sorts/insertionSort/blog.md)

## Solution

Iterated through the array in 6 passes. In each pass, the current index [i] evaluated whether there was a smaller number in the rest of the array. If there was it would switch positions with it, assign the index to the next number in the array and the next pass in the loop would kick off.

The last loop evaluated the last number against itself and then switched places with itself. Since the increment was 6 and larger than the length of the array, it broke out of the loop and back into the function.

Then it returned the array, sorted lowest to highest.
