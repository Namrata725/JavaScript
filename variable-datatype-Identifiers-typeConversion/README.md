# JavaScript: Datatypes, Identifiers, and Type Conversion

This folder contains notes and code examples that explain the basic building blocks of JavaScript: **Variable**, **Datatypes**, **Identifiers**, and **Type Conversion**.

=======================================================================================================
### **overview**
JS is a scripting language used for making web pages interactive and controlling dynamic website content.  It is used for calculating, manipulating, and validating data.

### **why JS**
- To create dynamic websites.
- it work with HTML and CSS
- IT run directly on browser.

### **where it works**
- it works on the browser.
- while creating HTML before </body> tag 
    - For internal JS, we write all JS code inside <script> </script> tag
    - for external JS file we connect JS through <script scr='location'> </script>
- we open  HTML in broswer and click inspect : element ->html, console->js console, messages, ouptput from console error messages.
=======================================================================================================

### **variable**

- variable: it provides us with a name that the program can manipulate 
- Variables are used to store information to be referred to and manipulated in the program.
- In JS, a variable is a value that can change depending on conditions or information passed to the program.

### Variable Declaration Keywords:
- `var` – Old and function-scoped (rarely used today).
- `let` – Block-scoped (recommended for values that may change).
- `const` – Block-scoped and used for values that should not be reassigned.

=======================================================================================================

### **Datatype**

Datatype is the classification of data that tells the computer what kind of value holds and what operations can be performed on the data.

There are **3 types** of datatype in js.

### Primitive Datatypes:

- **String** – Represents text (e.g., `"Hello"`).
- **Number** – Represents numeric values (e.g., `42`, `3.14`).
- **Boolean** – Represents logical values: `true` or `false`.

### other/ trivial Datatypes:

- **Undefined** – Assigned automatically when no value is set.
- **Null** – Represents an intentionally empty or "no value".

## composite Dtatypes:

- **Object** – Used to store collections, including arrays, functions, and custom structures.

=======================================================================================================

## Identifiers
Identifiers are names used to identify variables, functions, arrays, and objects.

### Rules for Naming Identifiers:
- Can include letters, digits, `_` (underscore), and `$` (dollar sign)
- Must **not** begin with a digit
- Are **case-sensitive**
- Should **not** be reserved keywords (like `let`, `function`, `return`, etc.)


=======================================================================================================

## Type Conversion

Sometimes, we have to convert the data type, like number to string or string to number; this is called type conversion. 

- `String()`
- `Number()`
- `Boolean()`

=======================================================================================================

## Folder Structure
- variable.js: shows how to declear variables
- datatype.js: shows about different types of data
- identifiers.js : Shows rules and examples of valid identifiers
- type conversion.js: See how type conversion works.

=======================================================================================================
