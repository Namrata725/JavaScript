//select element and console log tag name of.

let div1= document.querySelector('#div1');
console.log(div1);

console.log(div1.children);

//chnaging inner html text of button

div1.children[1].innerText='Button-1';

//CHNAGING INNER html OF 2nd div.

div2=document.querySelector('#div2');

console.log(div2.children);

div2.innerHTML='<h1>CHANGING HTML DOCS</h1>\n<p>thiS is updated code using js </p>\n<button>click me!!</button>'


//div 3 display is hidden but using text content we can get it and chnage it 
let div3 = document.querySelector('#div3');
div3.style.display = 'block'; 
console.log('div3 is now visible');
