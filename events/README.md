# Event Handling

### **overview**

Events are actions or occurrences that happen in the browser (e.g., user clicks, presses a key, or moves the mouse). JavaScript allows us to handle these events and make webpages interactive.

==========================================================================================

### **why use JS for event handling**
- To make the webpage interactive.
- To perform dynamic actions based on user input.

==========================================================================================

### **types of events**
#### Mouse Events:

- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout`
- `mousemove`

#### Keyboard Events:

- `keydown`
- `keypress`
- `keyup`


==========================================================================================

### **Best Practices**

- Avoid using inline event handlers like `onclick="..."`.
- Always use external JavaScript files to handle events.
- Assigning the same event using direct property (e.g., `element.onclick = ...`) will override previous handlers.

==========================================================================================

### **event object**

When an event occurs, an event object is automatically passed to the handler. It contains information like:
- `target` – the element that triggered the event
- `type` – the type of event

==========================================================================================

### **event listener**

An event listener is a method in JavaScript that waits for a specific event to occur on an element, and then triggers a callback function when that event happens.

==========================================================================================

### **event listeners**

#### Why use event listeners:
- Allows multiple functions to listen to the same event
- Keeps HTML and JS separate
- Easier to manage and remove handlers

==========================================================================================

#### Syntax:
- `element.addEventListener('eventType', callbackFunction);`

==========================================================================================

### **removing event listeners**

To remove an event listener, you must pass the **same function reference** that was used during `addEventListener`.

#### Syntax:
- `element.removeEventListener('eventType', callbackFunction);`

> Note: Anonymous functions cannot be removed since there's no reference to them.

==========================================================================================

## Folder Structure
- event_handling.js: shows different types of events, event object usage
- event_handling.html: contains HTML elements like buttons, with inline listener
- event_handling.css: adds styling to the event handling demo
- event_listeners.html: contains HTML elements like buttons
- event_listeners.js: shows event listener and remove
==========================================================================================