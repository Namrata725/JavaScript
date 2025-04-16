# JavaScript Arrays & Array Methods

### What is the difference between a Method and a Function?

A **function** is a reusable block of code that performs a specific task independently.
- A **method** is a function that is associated with an object (e.g., array methods like `push`, `map`, etc.).

==========================================================================================

## Array

An array is a collection of items stored in a single variable. It can hold multiple values (strings, numbers, booleans, objects, etc.).

### Why `for...of` loop for Arrays?
- `for...of` is ideal for arrays because it directly accesses the **values** of each element, not the indexes.
- It is simpler and cleaner than a traditional `for` loop when just reading elements.


==========================================================================================

## arrayMethod

These are **basic array methods** used to modify or interact with elements:

- `push()` – Adds one or more elements to the end of an array  
- `pop()` – Removes the last element from an array  
- `shift()` – Removes the first element  
- `unshift()` – Adds one or more elements to the beginning  
- `toString()` – Converts the array to a comma-separated string  
- `concat()` – Combines two or more arrays  
- `slice()` – Returns a shallow copy of a portion of an array  
- `splice()` – Adds/removes items at a specific index  

*These methods are used for **adding**, **removing**, and **transforming** array content.*

## more array methods

These are **higher-order array methods** that take a callback function and return a new result:

- `map()` – Creates a new array by applying a function to each element  
- `filter()` – Returns a new array containing only elements that satisfy a condition  
- `reduce()` – Reduces the array to a single value by applying a function  

*These methods are useful for **processing**, **transforming**, and **filtering** data in arrays efficiently.*

==========================================================================================

## Folder Structure

- `array.html` – Demonstrates declaring arrays, accessing elements, and using `for...of` loop  
- `arrayMethod.html` – Covers basic methods like `push`, `pop`, `slice`, `splice`, etc.  
- `arrayMethod2.html` – Shows higher-order methods like `map`, `filter`, and `reduce`

==========================================================================================

