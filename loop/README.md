# JavaScript: Loops

### **overview**
Loops are used when we want to **repeat a task** multiple times. Instead of writing the same code again and again, we use loops to make the code efficient and manageable.

### **why loops**
- To reduce code repetition.
- To automate repetitive tasks.
- To iterate over data (like arrays, objects, etc.).

### **where we use loops**
- Displaying a list of items (like student names, prices, etc.).
- Performing repetitive calculations.
- Traversing numbers, arrays, objects, and strings.
==========================================================================================

## Types of Loops in JavaScript

JavaScript provides several kinds of loops for different use:

### `for` loop
A `for` loop is a control structure that repeats a block of code a specific number of times. It is commonly used when the number of iterations is known in advance.
 
- **Initialization** – where the loop starts.
- **Condition** – the loop runs while this is true.
- **Update** – changes the loop variable after each iteration.
- Used when the number of iterations is known. It runs the loop block a specific number of times.

------------------------------------------------------------------------------------------

### `while` loop
A while loop is used when the number of iterations is **not known** ahead of time. The loop continues as long as the condition is true.

- **Initialization** – usually done before the loop.
- **Condition** – checked before each iteration.
- **Update** – must be handled inside the loop manually.
- Used when the loop should continue based on a condition.

------------------------------------------------------------------------------------------

### `do...while` loop
A `do...while` loop is similar to a `while` loop, but it **guarantees** that the loop will run at least once, since the condition is checked **after** the block is executed.

- **Initialization** – usually done before the loop.
- **Block Execution** – happens **first**.
- **Condition** – checked **after** the block runs.
- **Update** – must be handled inside the loop manually.
- Used when the code needs to run at least once regardless of the condition.

------------------------------------------------------------------------------------------

### `for...of` loop  
A `for...of` loop is used to iterate directly over **iterable** objects like arrays, strings, etc. It gives the **value** of each element.

- No manual initialization, condition, or update required.
- Automatically handles traversal of values.
-  Used when accessing the values in arrays, strings, etc.

------------------------------------------------------------------------------------------

### `for...in` loop  
A `for...in` loop is used to iterate over the **keys (property names)** of an object.

- No manual initialization or update.
- Loops over enumerable properties (keys).
- Used for looping through objects and retrieving property names.

==========================================================================================

## Folder Structure
- for.html: shows how simple for loop is.
- while.html: shows about while loop structure and work flow
- doWhile.html : how do while loop's structure and work flow
- forOf.html: See how of..of work in arrays .
- forIn.html: See how for...in works in objects.


