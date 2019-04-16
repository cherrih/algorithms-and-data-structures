# Notes
## Big O Notation

### Runtime Complexity

#### Linear O(n)

As n increases, runtime increases proportionately with n

#### Constant O(1)

Runtime will be the same no matter the size of n
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or an object (by key) is constant

#### Quadratic O(n^2)

As n increases, runtime increases at a rate of n^2

#### Logarithmic O(log n)

Logarithm is the inverse of exponentiation. The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get to a number that's less than or equal to 1
- O(log n) time complexity is great!
- Certain searching operaitons have logarithmic time complexity
- Efficient sorting algorithms involve logarithms
- Every time we double n, we add one extra step



### Space Complexity

#### Constant
- Most primitives (booleans, numbers, undefined, null)

#### Linear
- Strings (where n is string length)
- References (where n is the length for arrays or the number of keys for objects)

#### Logarithmic
- Recursion sometimes involves logarithmic space complexity

---
## Problem Solving Process
#### Understand the problem
- Can I restate the problem in my own words?
- What are the inputs?
- What are the outputs?
- Can the outputs be determined from the input? Do I have enough info to solve the problem?
- How should I label the important pieces of data that are a part of the problem? 
 
#### Explore concrete examples
- Start with simple examples with input and output
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

#### Break it down
- Explicitly write down the steps you need to take

#### Solve or simplify
- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

#### Lock back and refactor
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Common Problem Solving Patterns

#### Frequency Counters
- Uses objects or sets to collect values/frequencies of values
- Avoids the need for nested loops or O(n^2) operations with arrays or strings

#### Multiple Pointers
- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well

#### Sliding Window 
- Involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc

#### Divide and Conquer
- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- This pattern can tremendously decrease time complexity
- eg quick sort, merge sort, binary search

---
## Recursion
#### What is recursion?
- A process (a function in our case) that calls itself
- Invoke the same function with a _different input_ until you reach your _base case_
- Base case is the condition when the recursion ends
- JSON.parse / JSON.stringify are often called this way
- document.getElementById and DOM traversal algorithms
- Object traversal

#### Common pitfalls
- No base case (max call stack exceeded)
- Forgetting to return or returning the wrong thing

#### Helper Method Recursion
- Get around for when we need to compile some sort of result

#### Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr or substring to make copies of strings
- To make copies of objects use Object.assign or the spread operator

---
## Linear Search
- This function accepts an array/string and a value
- Loop through the array/string and check if the current element is equal to the value
- If it is found, return the index
- If not, return -1

---

## Linear Search / Divide and Conquer
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate *half* of the remaining elements at a time
- Binary search only works on sorted arrays

Pseudocode
- Accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - create a pointer in the middle
  - if you find the value you want, return the index
  - if the value is too small, move the left pointer up
  - if the value is too large, move the right pointer down
- if you never find the value, return -1

---

## Sorting

#### What is sorting?
- Process of rearranging the items in a collection (eg an array) so that the items are in some kind of order.
- An incredibly common task
- There are many ways to sort things, and different techniques have their own advantages and disadvantages

#### Bubble Sort 
- A sorting algorithm where the largest values bubble to the top

#### Selection Sort
- Similar to bubble sort, but instead of first placing large value into sorted position, it places small values into sorted position
- Go through and find smallest value, then place this in the first position


  