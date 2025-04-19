# Classes, Objects, and Prototypes

### **overview**

JavaScript uses object-oriented programming principles with prototype-based inheritance. Objects, prototypes, and classes provide structure, reusability, and abstraction in JS programs.

==========================================================================================

### **object**

- Objects are collections of properties, where each property is a key-value pair.
- They are used to represent real-world entities and encapsulate related data and functionality.

==========================================================================================

### **prototype**

- In JavaScript, every object has a hidden internal property known as `[[Prototype]]`, which can be accessed via `__proto__`.
- Prototypes are used to share properties and methods between objects.

#### **creation of prototype**
- Prototypes are created when we define a function or object.
- You can add methods or properties to a constructor's prototype to make them available to all instances.

#### **important note**
- If both an object and its prototype have a method with the same name, the object’s own method will override the one from the prototype.

==========================================================================================

### **class**

#### **overview**
- The `class` keyword in ES6 introduces a clearer and more concise way to create objects and handle inheritance.
- Classes are syntactic sugar over JavaScript’s existing prototype-based inheritance.

#### **class syntax**
- Classes define a blueprint for creating multiple objects with shared structure and behavior.
- Methods defined inside classes are automatically added to the prototype.

#### **constructor**
- The `constructor()` method is a special method used to initialize object properties when a class instance is created.


#### **Why Constructor**
- To assign values or perform setup operations when the object is first created.
- Acts like a blueprint for the object’s properties.
==========================================================================================


### **Inheritance**

- Inheritance allows one class(parent class) to derive properties and methods from another class(child class) using the `extends` keyword.

#### **Why Inheritance**
- To enable code reuse between parent and child classes.
- To structure and organize code more efficiently in hierarchical form.

#### **Syntax**
- A child class uses the `extends` keyword to inherit from a parent class.

#### **Note:**
If both the parent and child class define the same method, the child class’s version will override the one from the parent class.

==========================================================================================

### **Super Keyword**

- The `super` keyword is used to access and call functions on an object’s parent.

#### **Why Super**
- Used inside a subclass constructor to call the constructor of its parent class.
- Can also be used to invoke a method of the parent class inside the child class.

==========================================================================================

### **Error Handling**

#### **What is Error Handling**
- Error handling in JavaScript is a process of catching and managing errors that occur during program execution.
- It allows developers to handle unexpected situations gracefully without breaking the application.

#### **Why Error Handling**
- Prevents the entire application from crashing due to a single error.
- Provides meaningful error messages to users or developers.
- Helps debug and fix issues efficiently.

#### **Syntax**
- JavaScript uses the `try...catch` statement for error handling.

#### **What is Try and Catch**
- `try`: Defines a block of code to be tested for errors.
- `catch`: Defines a block of code to handle the error if one occurs in the `try` block.

==========================================================================================

## Folder Structure

- `objects.html`: Explains object creation and usage. Demonstrates the use of prototypes and prototype chaining.
- `constructor.html`: Shows how constructor works.
- `class.html`: Contains explanations on class declaration.
- `inheritance.html`: Describes how inheritance is implemented and how the super keyword works.
- `errorHandling.html`: Covers concepts and structure of error handling in JavaScript.

==========================================================================================