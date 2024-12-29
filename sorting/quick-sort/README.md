Quick sort is one of the sorting algorithms that works on the idea of divide and conquer. It takes an element as a pivot and partitions the given array around that pivot by placing it in the correct position in the sorted array. The pivot element can be selected in the following ways:

Select the First element as a pivot
Select the Last element as a pivot
Select the Middle element as a pivot
Select a Random element as a pivot

# Programmatic Approach for Quick Sort

First, create a recursive function that takes array, low value and high value as input and calls the partition fucntion for recursive call for partitioned arrays.
Define a partition function for last element as pivot and give the partition index of array.
Partition function iterate the given array and compare elements to pivot. If smallar then swap them to a sequential postion else no swap is performed.
At the end for iteration the pivot element is swapped to its correct position stored in i for the exact place.
Now return the latest position of the pivot element