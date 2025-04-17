// Selecting div2
let div2 = document.getElementById('div2');

// 1. Accessing the parent element
console.log("Parent of div2:", div2.parentElement); // <body>

// 2. Getting all children elements of div2
console.log("Children of div2:", div2.children); // [p, ul, button]

// 3. First and Last child elements of div2
console.log("First child of div2:", div2.firstElementChild);  // <p>
console.log("Last child of div2:", div2.lastElementChild);    // <button>

// 4. Next and Previous sibling elements of div2
console.log("Next sibling of div2:", div2.nextElementSibling);     // div3
console.log("Previous sibling of div2:", div2.previousElementSibling); // div1

// 5. Navigating deeper — accessing list inside div2
let list = document.getElementById('list1');
console.log("First item in list1:", list.firstElementChild);   // <li>Item 1</li>
console.log("Last item in list1:", list.lastElementChild);     // <li>Item 3</li>

// 6. Navigating from a paragraph to its parent
let para3 = document.getElementById('para3');
console.log("Parent of para3:", para3.parentElement); // div3

