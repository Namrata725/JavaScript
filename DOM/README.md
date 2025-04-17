### **Overview**

JavaScript interacts with the DOM to dynamically change the content, structure, and styles of a web page. This enables interactivity, such as responding to user input and updating content without refreshing the page.

==========================================================================================
### **Window Object**

- Represents the browser window.
- It is the global object in the browser environment.
- Provides access to browser-specific functionalities and includes the `document` object.
- methods like `console.log()`, `alert()`, `prompt()` are methods of objects

==========================================================================================

### **What is DOM?**

- DOM stands for **Document Object Model**.
- It is a structured representation of an HTML document in a tree format.
- Each HTML element is represented as a node in the tree.
- The DOM allows JavaScript to access and manipulate web pages programmatically.

==========================================================================================

### **Basic Structure of DOM**

- The DOM starts with the `<html>` element.
- It branches into `<head>` and `<body>`, which further contain child elements.
- Inside `<head>` there is `<meta>`,`<title>`,`<link>` we can see.
- Inside `<body>` there is `<div>` and other tags before `</body>` we can see `<script>` tag.
- The entire HTML document is represented as a hierarchical node tree.

==========================================================================================

### **Why DOM?**

- Allows dynamic updates to the page without reloading.
- Enables interaction with HTML elements.
- Essential for building dynamic and interactive web applications.

==========================================================================================

### **Accessing Data from HTML**

- JavaScript accesses HTML elements using the `document` object.
- This allows retrieval and manipulation of content, attributes, and styles.

==========================================================================================

### **Difference Between `console.log` and `console.dir`**

- `console.log` displays the HTML structure of an element.
- `console.dir` displays the JavaScript object representation of the element, making it easier to inspect properties and methods.

==========================================================================================

### **Child Nodes vs Children**

- `childNodes` returns all child nodes, including text and comment nodes.
- `children` returns only HTML element nodes.

==========================================================================================

### **What Happens When We Console `children` and `childNodes`**

- `children` gives a cleaner view with only element nodes.
- `childNodes` may include whitespace and text nodes, which can affect traversal and manipulation.

==========================================================================================

### **DOM Manipulation**

JavaScript enables DOM manipulation by allowing developers to:

- Select HTML elements
- Read and update element content
- Modify attributes and styles
- Add or remove elements from the page

==========================================================================================

### **Selecting Elements**

JavaScript provides several methods for selecting elements:

- By ID : `getElementById('id')`
- By Class: `getElementsByClass('class')`
- By Tag Name: `getElementByTag('tag')`

==========================================================================================

### **querySelector**

- A powerful method to select the first matching element using CSS-style selectors.
- `document.querySelector('#id'/'.class'/ 'tag')`       ::return 1st value only
- `document.querySelectorAll('#id'/'.class'/ 'tag')`    :: returnd all values
==========================================================================================

### **Getting and Setting DOM Element Content**

JavaScript allows interaction with element content using DOM properties through:

- `innerText`: Retrieves or sets visible text content.
- `innerHTML`: Retrieves or sets HTML content inside an element.
- `textContent`: Retrieves or sets all text content, including hidden elements.
- `tagName`: Retrieves the tag name of the element.

==========================================================================================

## Folder Structure

==========================================================================================

## **html/**


- **`dom_overview.html`**: Contains the basic HTML structure for DOM overview and shows accessing elements.
- **`dom_selectors.html`**: HTML demonstrating the use of various element selection methods.
- **`dom_properties.html`**: Displays HTML for interacting with DOM properties (like innerText, innerHTML).

==========================================================================================

## **css/**


- **`dom_overview.css`**: Styling for the DOM overview page.
- **`dom_selectors.css`**: CSS for the DOM selectors page.
- **`dom_properties.css`**: CSS for the DOM property manipulation page.

==========================================================================================

## **js/**


- **`dom_overview.js`**: JavaScript code for explaining the DOM overview and related concepts.
- **`dom_tree_navigation.js`**: JavaScript code for demonstrating DOM tree navigation, including   accessing `parent`, `child`, and `sibling elements` using properties like `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling`.
- **`dom_selectors.js`**: Contains JS for selecting elements by ID, class, tag name, and querySelector.
- **`dom_properties.js`**: JavaScript for interacting with DOM properties like `innerText`, `innerHTML`, and more.

==========================================================================================

## Accessing Attributes

Attributes of HTML elements can be accessed to retrieve their values. This is useful for reading information like `href`, `src`, `alt`, `id`, etc.

==========================================================================================

## Setting Attributes

Attributes can be added or updated to change the behavior or appearance of elements. This allows dynamic modification of elements, like setting a new `src` for an image or adding a custom attribute.

==========================================================================================

## Accessing & Setting Styles

Inline styles of elements can be accessed and changed using JavaScript. This is often used to dynamically apply visual changes to elements, such as changing colors, sizes, spacing, and more.

- Styles can be read to check the current inline style.
- Styles can be set to update how the element appears.

==========================================================================================

## Adding New Elements

### Steps to Add a New Element:

1. **Create the Element**  
   A new DOM element is created in memory (not yet in the page).

2. **Decide Where to Add It**  
   Choose the parent node or reference point where the new element will be inserted.

3. **Select the Node**  
   If the parent or reference node is not yet selected, select it using appropriate DOM selection methods.

4. **Insert the Element**  
   Add the element using methods like `append`, `prepend`, `before`, or `after`.

This allows the page content to be updated or expanded dynamically.

==========================================================================================

## Styling New Elements

Once an element is added, inline styles can be applied directly to give it color, size, layout positioning, and other visual properties.

==========================================================================================

##  Deleting Elements

Elements can be removed from the DOM when they are no longer needed. This is useful for cleaning up the interface or removing dynamic content.

==========================================================================================
## 📁 Folder Structure: DOM Attributes

- **`attributes.html`**: Contains the basic HTML structure for demonstrating DOM attributes and manipulation.
- **`attributes.css`**: Provides styling for the DOM attributes demo page.
- **`attributes.js`**: JavaScript code that explains and demonstrates working with DOM attributes, setting styles, creating new elements, and deleting nodes.
