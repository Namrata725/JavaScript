let div=document.querySelector('div');// returns main div

console.log(div);
//getting id attributes

let attributesID= div.getAttribute('id');
console.log(attributesID) //divId

// getting name attributes

let atrributesName= div.getAttribute('name');
console.log(atrributesName) //divName

//getting attributes class

let attributeClass= div.getAttribute('class');
console.log(attributeClass) //divClass

//setting attributes to h2 

let h2= document.querySelector('h2');
h2.setAttribute('name',' h2Name'); //setting name attribute
h2.setAttribute('class',' h2Class'); //setting class attribute
h2.setAttribute('id',' h2Id'); //setting id attribute

console.log(h2) //<h2 name='h2Name', class='h2Class', id='h2Id>It is a list of items </h2>

//cmodify styling to attributes

let box= document.querySelector('#box');
box.style.fontSize='20px';
box.style.backgroundColor='purple';
box.style.padding='20px';
box.style.width='250px';
box.style.color='white' ;

//add button

let Mybtn=document.createElement('button');
Mybtn.innerText='click me !!!';

//access div 

let div2=document.querySelector('.div2');

//adding button to end of node but inside

div2.append(Mybtn);

//adding div at start and inside

let Mydiv= document.createElement('div');
Mydiv.innerHTML='<p><i>this is the div which is inside out 2nd div</i></p>'
div2.prepend(Mydiv);

//BEFORE

let para= document.createElement('p');
//let add para before btn
para.innerText='text before button';
Mybtn.before(para);

//add a div-3 after btn

let div3= document.createElement('div');
div3.style.height='20px';
div3.style.backgroundColor='blue';

Mybtn.after(div3);

//let delete div 3

div3.remove();