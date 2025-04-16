//accessing element

console.log(window.document) //print all properties/ methods

//accessing body 

console.log(window.document.body); //print HTML
console.dir(window.document.body); //print all properties/ methods


//childNodes and children

console.log(document.body.childNodes); //output:: NodeList(6) [text, h1, text, div.main, text, script]

console.log(document.body.children); //output:: dom_overview.js:15 HTMLCollection(3) [h1, div.main, script]

//chnage inner text of div.main's 

document.body.childNodes[1].innerText='hello'; // h1 taged data will chnage to hello

document.body.children[0].innerText='updated again'// h1 tage will chnage to updated again

