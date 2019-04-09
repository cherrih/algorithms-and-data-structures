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



### Space Complexity

#### Constant
- Most primitives (booleans, numbers, undefined, null)

#### Linear
- Strings (where n is string length)
- References (where n is the length for arrays or the number of keys for objects)

#### Logarithmic
- Recursion sometimes involves logarithmic space complexity

---
## Problem Solving
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
