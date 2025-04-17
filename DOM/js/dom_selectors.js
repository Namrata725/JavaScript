//selecting elemets with id

let heading1=document.getElementById('heading');
console.log(heading1); //<h2 id="heading">Programming language </h2>
console.dir(heading1); //properties

//selecting element with classname

let para=document.getElementsByClassName('para');
console.log(para); 

/*
HTMLCollection(2) [p.para, p.para]
0: p.para
1: p.para
length: 2
*/

//selecting id with tagname

let ul= document.getElementsByTagName('ul');
console.log(ul); //html collection

//classname and tgname is work as arry

console.log(para[1]) //<p class="para">These are most common programming languages.</p>

//accessing  div's childnode and childrens

let Mydiv= document.getElementById('myDiv');
console.dir(Mydiv)

console.log(Mydiv.children)

/*HTMLCollection(3) [p.para, p.para, ul#programmingLanguages, programmingLanguages: ul#programmingLanguages]
0: p.para
1: p.para
2: ul#programmingLanguages 
programmingLanguages: ul#programmingLanguages
length: 3
[[Prototype]]: HTMLCollection
*/

console.log(Mydiv.children[0]) //<p class="para">this is list of programming lanuages.</p>

Mydiv.children[0].innerText='these are 5 commonly used programming languages';


//query selectors: # for id, . for class and tage name for tag name

//selecting by id
div=document.querySelector('#myDiv');
console.log(div); //get div

//query selector ALL for class
p=document.querySelectorAll('.para')
console.log(para)


//query selelctor for tag: returns only 1st value querySelector

tag=document.querySelector('li');
console.log(tag) //<li>JS</li>

//to get all

liTag=document.querySelectorAll('li')
console.log(liTag);

/* NodeList(5) [li, li, li, li, li]
0: li
1: li
2: li
3: li
4: li
length: 5
[[Prototype]]: NodeList
*/

